import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { IsArray, IsBoolean, IsEmail, IsIn, IsPhoneNumber, IsString, Length, validateSync } from 'class-validator'
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { ContactBody } from './contact-body';
import aws from 'aws-sdk';
import dedent from 'dedent';

const ses = new aws.SES({region: 'ap-northeast-1'})

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  if(event.requestContext.http.method === 'POST' && event.body){
    let contactBody: ContactBody
    try {
      contactBody = new ContactBody(JSON.parse(event.body))
    } catch(err) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(err)
      }
    }

    const doc = new GoogleSpreadsheet('1N6GioB3gqv4EFwEQ1zjAXiopxzm1vajPDBMtvMbpWHk')
    await doc.useServiceAccountAuth(JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS!))
    await doc.loadInfo()

    const sheet = doc.sheetsByTitle['contact']
    await sheet.loadHeaderRow()

    const rowData = contactBodyToRowData(contactBody)
    await sheet.addRow(rowData)

    try {
      await ses.sendEmail({
        Destination: {
          ToAddresses: ['mail@kominoru.com', 'piou@hotmail.co.jp']
        },
        Message: {
          Body: {
            Text: {
              Data: dedent`
                kominoru.comに新しい問い合わせがきました

                ----
                ${Object.entries(rowData).map(([key, value]) => `${key}:\n${value}`).join('\n\n')}
                ----

                https://docs.google.com/spreadsheets/d/1N6GioB3gqv4EFwEQ1zjAXiopxzm1vajPDBMtvMbpWHk
              `
            }
          },
          Subject: {
            Data: `kominoru.comに新しい問い合わせがきました`
          }
        },
        Source: 'mail@kominoru.com'
      }).promise()
    } catch(err) {
      console.error(err)
    }
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(rowData)
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
    })
  }
}

const contactBodyToRowData = (contactBody: ContactBody) => {
  return {
    name: contactBody.name,
    email: contactBody.email,
    phoneNumber: contactBody.phoneNumber,
    site: contactBody.site ?? '',
    requests: contactBody.requests.join(', '),
    hasLand: (contactBody.hasLand === null || typeof contactBody.hasLand === 'undefined') ? '' : Number(contactBody.hasLand),
    text: contactBody.text,
    language: contactBody.language,
    createdAt: (new Date()).toISOString(),
  }
}
import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { IsArray, IsBoolean, IsEmail, IsIn, IsPhoneNumber, IsString, Length, validateSync } from 'class-validator'
import { GoogleSpreadsheet } from 'google-spreadsheet';

const prefectures = ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'] as const
type Prefecture = typeof prefectures[number]

class FormBody {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsEmail()
  @Length(1, 256)
  email: string;

  @IsPhoneNumber('JP')
  phoneNumber: string;

  @IsIn(prefectures)
  site: Prefecture

  @IsArray()
  @IsString({each: true})
  @Length(1, 256, {each: true})
  requests: string[]

  @IsBoolean()
  hasLand: boolean

  @IsString()
  @Length(1, 4096)
  text: string

  @IsString()
  @Length(2, 2)
  language: string;
  
  constructor(body: any){
    Object.assign(this, body)
    const errors = validateSync(this, {forbidUnknownValues: true})
    if(errors.length > 0) {
      throw errors
    }
  }

  toRowData(){
    return {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      site: this.site,
      requests: this.requests.join(', '),
      hasLand: Number(this.hasLand),
      text: this.text,
      language: this.language,
      createdAt: (new Date()).toISOString(),
    }
  }
}

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  if(event.requestContext.http.method === 'POST' && event.body){
    let formBody: FormBody
    try {
      formBody = new FormBody(JSON.parse(event.body))
    } catch(err) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: ''
      }
    }

    const doc = new GoogleSpreadsheet('1N6GioB3gqv4EFwEQ1zjAXiopxzm1vajPDBMtvMbpWHk')
    await doc.useServiceAccountAuth(JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS!))
    await doc.loadInfo()
    const sheet = doc.sheetsByTitle['contact']
    await sheet.loadHeaderRow()
    const columns = sheet.headerValues
    const rowData = formBody.toRowData()
    await sheet.addRow(rowData)
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(rowData)
    }
  }
  return {
    statusCode: 400,
    body: JSON.stringify({
      event
    })
  }
}
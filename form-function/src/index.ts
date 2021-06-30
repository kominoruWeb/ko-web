import { APIGatewayProxyHandler } from 'aws-lambda'
export const handler: APIGatewayProxyHandler = async (event) => {
  event.body
  return {
    statusCode: 200,
    body: ''
  }
}
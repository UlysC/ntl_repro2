exports.handler = async event => {
  return {
    statusCode: 200,
    headers: JSON.stringify({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
    }),
    body: JSON.stringify({ message: "hello" })
  }
}
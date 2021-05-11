exports.handler = async event => {
  return {
    statusCode: 200,
    headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: "hello" })
  }
}
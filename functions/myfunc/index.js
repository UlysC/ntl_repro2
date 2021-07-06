const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTION",
  "Content-Type": "application/json",
}
exports.handler = async event => {
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ message: "hello from myfunc" })
  }
}
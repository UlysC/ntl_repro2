const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "DELETE",
  "Content-Type": "application/json",
}
exports.handler = async event => {
  if (event.httpMethod != "DELETE") {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: "not delete" }),
      }
  }
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ message: "hello from myfunc" })
  }
}
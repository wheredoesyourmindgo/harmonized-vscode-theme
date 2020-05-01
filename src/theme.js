const fetch = require("node-fetch");
const stripJsonComments = require("strip-json-comments");

async function getTheme({ name, url }) {
  const response = await fetch(url);
  const data = await response.json();
  const jsonBuffer = new Buffer.from(data.content, "base64");
  const jsonStr = jsonBuffer.toString();
  const strippedJson = JSON.parse(stripJsonComments(jsonStr));
  return {
    ...strippedJson,
    name,
  };
}

module.exports = getTheme;

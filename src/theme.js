import fetch from "node-fetch";
import JSON5 from "json5";

async function getTheme({ name, url }) {
  const response = await fetch(url);
  const data = await response.json();
  const jsonBuffer = Buffer.from(data.content, "base64");
  const jsonStr = jsonBuffer.toString();
  const strippedJson = JSON5.parse(jsonStr);
  return {
    ...strippedJson,
    name,
  };
}

export default getTheme;

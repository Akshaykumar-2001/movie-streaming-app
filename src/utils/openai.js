import OpenAI from "openai";
const apiKey = process.env.REACT_APP_OPENAI_KEY;
const client = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true, //process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});
export default client;

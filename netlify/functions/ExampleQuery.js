import { getSecrets } from "@netlify/functions";
import NetlifyGraph from "./netlifyGraph"

export const handler = async (event, context) => {
  // By default, all API calls use no authentication
  let accessToken = null;

  //// If you want to use the client's accessToken when making API calls on the user's behalf:
  // accessToken = event.headers["authorization"]?.split(" ")[1]

  //// If you want to use the API with your own access token:
  // accessToken = (await getSecrets(event))?.oneGraph?.bearerToken;
      
  const eventBodyJson = JSON.parse(event.body || "{}");

  

  const { errors: ExampleQueryErrors, data: ExampleQueryData } =
    await NetlifyGraph.fetchExampleQuery({  }, accessToken);

  if (ExampleQueryErrors) {
    console.error(JSON.stringify(ExampleQueryErrors, null, 2));
  }

  console.log(JSON.stringify(ExampleQueryData, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      ExampleQueryErrors: ExampleQueryErrors,
      ExampleQueryData: ExampleQueryData
    }),
    headers: {
      'content-type': 'application/json',
    },
  };
};

/** 
 * Client-side invocations:
 * Call your Netlify function from the browser (after saving
 * the code to `ExampleQuery.js`) with these helpers:
 */

/**
async function fetchExampleQuery(oneGraphAuth, params) {
  const {} = params || {};
  const resp = await fetch(`/.netlify/functions/ExampleQuery`,
    {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        ...oneGraphAuth?.authHeaders()
      }
    });

    const text = await resp.text();

    return JSON.parse(text);
}
*/

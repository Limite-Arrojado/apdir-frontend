export const performRequest = async ({
  query,
  variables = {},
}: {
  query: string;
  variables?: any;
}) => {
  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify({ query, variables }),
    cache: 'no-store'
    //next: { tags: ["dato-data"] },
  });

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody
      )}`
    );
  }

  return responseBody;
};

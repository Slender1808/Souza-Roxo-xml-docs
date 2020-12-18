/*
 # Exemplo de codigo com TypeScript
*/

function fetchGraphQL(
  operationsDoc: string,
  operationName: string,
  variables: Record<string, any>
) {
  return fetch("https://skw.souzaroxo.com.br/v1/graphql", {
    method: 'POST',
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName,
    }),
  }).then(result => result.json());
}

const operation = `
  mutation insertXml($xml: xml!, $user: uuid!) {
    insert_XML(objects: {xml: $xml, user: $user}) {
      affected_rows
    }
  }
`;

function fetchinsertXml() {
  return fetchGraphQL(operations, insertXml, {"xml": xml, "user": user})
}

fetchinsertXml()
  .then(({ data, errors }) => {
    if (errors) {
      console.error(errors);
    }
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

/*
 # Exemplo de codigo com asyn/await
 # Para usar o exemplo a baixo no Node js é necessario adicinar node-fetch  
*/
async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    "https://skw.souzaroxo.com.br/hasura/v1/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await result.json();
}

const operationsDoc = `
  mutation insertXml($xml: xml!, $user: uuid!) {
    insert_XML(objects: {xml: $xml, user: $user}) {
      affected_rows
    }
  }
`;

function executeInsertXml(xml, user) {
  return fetchGraphQL(
    operationsDoc,
    "insertXml",
    {"xml": xml, "user": user}
  );
}

async function startExecuteInsertXml(xml, user) {
  const { errors, data } = await executeInsertXml(xml, user);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

startExecuteInsertXml(xml, user);

/*
 # Exemplo de codigo com método Then
 # Para usar o exemplo a baixo no Node js é necessario adicinar node-fetch  
*/

function fetchGraphQL(operationsDoc, operationName, variables) {
    return fetch(
      "https://skw.souzaroxo.com.br/v1/graphql",
      {
        method: "POST",
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName
        })
      }
    ).then((result) => result.json());
  }
  
  const operationsDoc = `
    mutation insertXml($xml: xml!, $user: uuid!) {
      insert_XML(objects: {xml: $xml, user: $user}) {
        affected_rows
      }
    }
  `;
  
  function executeInsertXml(xml, user) {
    return fetchGraphQL(
      operationsDoc,
      "insertXml",
      {"xml": xml, "user": user}
    );
  }
  
  executeInsertXml(xml, user)
    .then(({ data, errors }) => {
      if (errors) {
        // handle those errors like a pro
        console.error(errors);
      }
      // do something great with this precious data
      console.log(data);
    })
    .catch((error) => {
      // handle errors from fetch itself
      console.error(error);
    });

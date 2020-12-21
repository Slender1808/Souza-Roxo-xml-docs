/* This is an example snippet - you should consider tailoring it
to your service.
*/
/*
  Add these to your `package.json`:
    "apollo-boost": "^0.3.1",
    "graphql": "^14.2.1",
    "graphql-tag": "^2.10.0",
    "react-apollo": "^2.5.5"
*/

import gql from "graphql-tag";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Mutation, ApolloProvider } from "react-apollo";

// This setup is only needed once per application;
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://skw.souzaroxo.com.br/hasura/v1/graphql",
  }),
});

const INSERT_XML_MUTATION = gql`
  mutation insertXml($xml: xml!, $user: uuid!) {
    insert_XML(objects: {xml: $xml, user: $user}) {
      affected_rows
    }
  }
`;

const InsertXmlMutation = (props) => {
  return (
    <Mutation
      mutation={INSERT_XML_MUTATION}>
      {(insertXml, { loading, error, data }) => {
        if (loading) return <pre>Loading</pre>
    
        if (error)
          return (
            <pre>
              Error in INSERT_XML_MUTATION
              {JSON.stringify(error, null, 2)}
            </pre>
          );
    
        const dataEl = data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : null;
    
        return (
          <div>
            {dataEl}
    
            <button onClick={() => insertXml({"xml": xml, "user": user})}>
              Run mutation: insertXml
            </button>
          </div>
        );
      }}
    </Mutation>
  )
};

const container = (
  <ApolloProvider client={apolloClient}>
    <InsertXmlMutation xml={xml} user={user} />
  </ApolloProvider>
);

ReactDOM.render(container, document.getElementById("root"));

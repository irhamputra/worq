import React from "react";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

const httpLink = createHttpLink({
  uri: "http://localhost:1337/graphql"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const ApolloApp = props => (
  <ApolloProvider client={client}>{props.children}</ApolloProvider>
);

export default ApolloApp;

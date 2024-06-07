import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://adamaszekwebdev.pl/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

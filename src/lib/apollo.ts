import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohx9mf09da01xsbzl55zl7/master',
    cache: new InMemoryCache()
})
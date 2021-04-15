import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";
import Constants from "expo-constants";  // allows access to .env through app.config.js extra property

const httpLink = createHttpLink({uri: Constants.manifest.extra.apollo_uri});

const createApolloClient=()=>{
    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });
};


export default createApolloClient;
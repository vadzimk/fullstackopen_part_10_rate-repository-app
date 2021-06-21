import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";
import Constants from "expo-constants";  // allows access to .env through app.config.js extra property
import {setContext} from "@apollo/client/link/context";
import {relayStylePagination} from "@apollo/client/utilities";

const httpLink = createHttpLink({uri: Constants.manifest.extra.apollo_uri});
const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                repositories: relayStylePagination(),
            },
        },
    },
});

const createApolloClient = (authStorage) => {


    // each request will be using authorization header
    const authLink = setContext(async (_, {headers}) => {
        try {
            const accessToken = await authStorage.getAccessToken();
            return {
                headers: {
                    ...headers,
                    authorization: accessToken ? `Bearer ${accessToken}` : "",
                }
            };
        } catch (e) {
            console.log(e);
            return {headers};
        }

    });


    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: cache,
    });
};


export default createApolloClient;
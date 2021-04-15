import {useMutation} from "@apollo/client";
import {AUTHORIZE} from "../graphql/queries.js";
import useAuthStorage from "./useAuthStorage.js";
import {useApolloClient} from '@apollo/client';

const useSignIn = () => {
    const [sendCredentials, {data}] = useMutation(AUTHORIZE);
    const authStorage = useAuthStorage();  // custom hook
    const apolloClient = useApolloClient();

    const signIn = async ({username, password}) => {

        const credentials = {username, password};

        await sendCredentials({variables: {credentials}});

        if (data && data.authorize){
            await authStorage.setAccessToken(data.authorize.accessToken);
            await apolloClient.resetStore();
        }
    };

    return [signIn, data];
};

export default useSignIn;
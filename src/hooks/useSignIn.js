import {useMutation} from "@apollo/client";
import {AUTHORIZE} from "../graphql/queries.js";
import useAuthStorage from "./useAuthStorage.js";
import {useApolloClient} from '@apollo/client';

const useSignIn = () => {
    const [mutate] = useMutation(AUTHORIZE);
    const authStorage = useAuthStorage();  // custom hook
    const apolloClient = useApolloClient();

    const signIn = async ({username, password}) => {

        const credentials = {username, password};

        const res = await mutate({variables: {credentials}});
        console.log("usesignin_res", res)
        if (res.data && res.data.authorize){
            await authStorage.setAccessToken(res.data.authorize.accessToken);
            await apolloClient.resetStore();
        }
    };

    return signIn;
};

export default useSignIn;
import {useMutation} from "@apollo/client";
import {AUTHORIZE} from "../graphql/queries.js";
import AuthStorage from "../utils/authStorage.js";

const useSignIn = () => {
    const [sendCredentials, {data}] = useMutation(AUTHORIZE);
    const authStorage = new AuthStorage();

    const signIn = async ({username, password}) => {
        const credentials = {username, password};
        await sendCredentials({variables: {credentials}});
        if (data && data.authorize)
            await authStorage.setAccessToken(data.authorize.accessToken);
    };



    return [signIn, data];
};

export default useSignIn;
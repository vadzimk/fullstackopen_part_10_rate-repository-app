import {useMutation} from "@apollo/client";
import {AUTHORIZE} from "../graphql/queries.js";
import useAuthStorage from "./useAuthStorage.js";


const useSignIn = () => {
    const [sendCredentials, {data}] = useMutation(AUTHORIZE);
    const authStorage = useAuthStorage();  // custom hook


    const signIn = async ({username, password}) => {

        const credentials = {username, password};
        console.log("credentials", credentials);
        await sendCredentials({variables: {credentials}});



        if (data && data.authorize)
            await authStorage.setAccessToken(data.authorize.accessToken);
    };



    return [signIn, data];
};

export default useSignIn;
import {useMutation} from "@apollo/client";
import {AUTHORIZE} from "../graphql/queries.js";

const useSignIn = () => {
    const [sendCredentials, {data}] = useMutation(AUTHORIZE);

    const signIn = async ({username, password}) => {
        const credentials  = {username, password};
        await sendCredentials({variables: {credentials}});

    };

    return [signIn, data];
};

export default useSignIn;
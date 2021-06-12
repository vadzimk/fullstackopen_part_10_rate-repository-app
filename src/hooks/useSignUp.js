import {useMutation} from "@apollo/client";
import {CREATE_USER} from "../graphql/queries.js";


const useSignUp =()=>{
    const [mutate, {error, data}] = useMutation(CREATE_USER);
    return async({username, password})=>{
        await mutate({variables:{user:{username, password}}});
        return {error, data};
    };
};

export default useSignUp;
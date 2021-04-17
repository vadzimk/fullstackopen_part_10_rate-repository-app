import {useQuery} from "@apollo/client";
import {GET_SINGLE_REPO} from "../graphql/queries.js";

const useSingleRepo = (id) => {
console.log("useSingleRepo_id", id)
    const {data} = useQuery(GET_SINGLE_REPO, {variables: {id}});
    console.log("useSingleRepo_data", data)
    return data ? data.repository : undefined;
};


export default useSingleRepo;

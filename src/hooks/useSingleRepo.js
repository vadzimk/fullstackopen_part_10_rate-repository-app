import {useQuery} from "@apollo/client";
import {GET_SINGLE_REPO} from "../graphql/queries.js";

const useSingleRepo = (id) => {

    const {data} = useQuery(GET_SINGLE_REPO, {variables: {id}});

    return data ? data.repository : undefined;
};


export default useSingleRepo;

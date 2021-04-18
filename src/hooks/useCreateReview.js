import {useMutation} from "@apollo/client";
import {CREATE_REVIEW} from "../graphql/queries.js";


const useCreateReview=()=>{

    const [createReview, {data}] = useMutation(CREATE_REVIEW);


}


export default useCreateReview;
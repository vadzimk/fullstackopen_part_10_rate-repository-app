import {useMutation} from "@apollo/client";
import {DELETE_REVIEW} from "../graphql/queries.js";


const useDeleteReview=()=>{
    const [deleteReview, {data}] = useMutation(DELETE_REVIEW);
    const handleDeleteReview = async (id)=>{
        await deleteReview({variables:{id}});
    };
    return {handleDeleteReview, data};
};


export default useDeleteReview;
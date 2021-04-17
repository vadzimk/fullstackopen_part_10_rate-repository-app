import {useQuery} from "@apollo/client";
import {GET_REVIEWS} from "../graphql/queries.js";

const useReviews = (id) => {
    const {data} = useQuery(GET_REVIEWS, {variables: {id}});


    return data ? data.repository.reviews.edges : undefined;
};

export default useReviews;
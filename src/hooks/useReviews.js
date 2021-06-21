import {useQuery} from "@apollo/client";
import {GET_REVIEWS} from "../graphql/queries.js";

const useReviews = (variables) => {
    const {data, loading, fetchMore} = useQuery(GET_REVIEWS, {
        fetchPolicy: 'cache-and-network',
        variables
    });

    const handleFetchMore=()=>{
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) return;
        console.log("after",data.repository.reviews.pageInfo.endCursor );
        fetchMore({
            variables:{
                ...variables,
                after: data.repository.reviews.pageInfo.endCursor,

            }
        });

    };

    return {
        data: data?.repository.reviews.edges,
        fetchMore: handleFetchMore,
    };
};

export default useReviews;
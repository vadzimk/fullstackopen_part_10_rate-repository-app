// import {useState, useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from '../graphql/queries.js';


const useRepositories = (variables) => {
    // const [repositories, setRepositories] = useState();
    // const [loading, setLoading] = useState(false);
    const {data, loading, fetchMore, ...result} = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: variables
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
        if (!canFetchMore) return;
        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...variables,
            }
        });
    };

    // const fetchRepositories = async () => {
    // setLoading(true);
    // const response = await fetch('http://192.168.1.239:5000/api/repositories');
    // const json = await response.json();
    // setLoading(false);
    // setRepositories(json);
    // };

    // useEffect(() => {
    //         fetchRepositories();
    // }, []);


    return {
        repositories: data?.repositories,
        fetchMore: handleFetchMore,
        loading,
        ...result,
        // refetch: fetchRepositories
    };
};

export default useRepositories;
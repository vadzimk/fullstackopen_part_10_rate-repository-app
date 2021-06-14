// import {useState, useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from '../graphql/queries.js';


const useRepositories = (variables) => {
    // const [repositories, setRepositories] = useState();
    // const [loading, setLoading] = useState(false);
    const {data, ...result} = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network', variables:variables});

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
        repositories: data ? data.repositories : undefined,
        ...result
        // loading,
        // refetch: fetchRepositories
    };
};

export default useRepositories;
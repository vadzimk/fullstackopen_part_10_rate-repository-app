import React, {useState} from 'react';
import useRepositories from "../hooks/useRepositories.js";
import RepositoryListContainer from "./RepositoryListContainer.jsx";
import {useDebounce} from "use-debounce";

const orderByOptions = [
    {
        label: 'Latest repositories',
        value: 'latest'
    },
    {
        label: 'Highest rated repositories',
        value: 'highestRating',
    },
    {
        label: 'Lowest rated repositories',
        value: 'lowestRating',
    },
];

const variablesOrderBy = {
    latest: {
        orderBy: 'CREATED_AT',
        orderDirection: 'DESC',
    },
    highestRating: {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'DESC',
    },
    lowestRating: {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'ASC',
    },
};

const RepositoryList = () => {
    const [orderByValue, setOrderBy] = useState('latest');
    const [searchKey, setSearchQuery] = useState('');
    const [searchKeyword] = useDebounce(searchKey, 500);
    const {repositories} = useRepositories({...variablesOrderBy[orderByValue], searchKeyword}); // custom hook

    const orderByChange = (newOrder) => {
        setOrderBy(newOrder);
    };

    const searchKeyChange=(searchKey)=>{
        setSearchQuery(searchKey);
    };

    return (
        <RepositoryListContainer
            orderByChange={orderByChange}
            orderByOptions={orderByOptions}
            repositories={repositories}
            orderByValue={orderByValue}
            searchKeyChange={searchKeyChange}
            searchKey={searchKey}
        />
    );
};

export default RepositoryList;
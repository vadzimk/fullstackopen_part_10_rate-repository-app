import React from 'react';
import useRepositories from "../hooks/useRepositories.js";
import RepositoryListContainer from "./RepositoryListContainer.jsx";



const RepositoryList = () => {
    const {repositories} = useRepositories(); // custom hook

    return (
       <RepositoryListContainer repositories={repositories}/>
    );
};

export default RepositoryList;
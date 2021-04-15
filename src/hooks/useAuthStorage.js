import {useContext} from 'react';
import AuthStorageContext from "../contexts/AuthStorageContext.js";

const useAuthStorage=()=>{
    const authStorage = useContext(AuthStorageContext);
    return authStorage;
};

export default useAuthStorage;
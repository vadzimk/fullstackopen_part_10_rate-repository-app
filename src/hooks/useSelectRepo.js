import {useHistory} from "react-router-native";

const useSelectRepo=()=>{
    const history = useHistory();

    const selectRepo = (id) => {
        history.push(`/repo/${id}`);

    };

    return {selectRepo};
};

export default useSelectRepo;

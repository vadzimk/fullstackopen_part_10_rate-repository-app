import React from 'react';
import {View, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import ReviewItem from "./ReviewItem.jsx";
import theme from "../theme.js";
import useSelectRepo from "../hooks/useSelectRepo.js";
import useDeleteReview from "../hooks/useDeleteReview.js";



const ReviewItemWithActions = (props) => {

    const {selectRepo} = useSelectRepo();
    const {handleDeleteReview} = useDeleteReview();
    const deleteReviewHandler =(id)=>{

        Alert.alert("Delete review",
            "Are you sure you want to delete this review",
            [
                {
                    text: "Cancel",
                    onPress: ()=>{
                        console.log("cancel pressed");
                        },
                },
                {
                    text: "Delete",
                    onPress: async ()=>{
                       await handleDeleteReview(id);
                        props.refetch();
                        console.log("delete pressed", id);
                    }
                }
            ]);

    };

    return <View>
        <ReviewItem {...props}/>
        <View style={{flexDirection: "row", justifyContent: 'space-evenly', backgroundColor: "#FFF"}}>
            <Button mode={'contained'} uppercase={false} color={theme.colors.primary} onPress={()=>selectRepo(props.review.repository.id)}>
                View repository
            </Button>
            <Button mode={'contained'} uppercase={false} color={theme.colors.error} onPress={()=>deleteReviewHandler(props.review.id)}>
                Delete review
            </Button>
        </View>

    </View>;
};

export default ReviewItemWithActions;
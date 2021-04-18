import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import * as yup from 'yup';
import FormikTextInput from "./FormikTextInput.jsx";
import {Formik} from "formik";
import theme from "../theme.js";
import ItemSeparator from "./ItemSeparator.jsx";
import {useMutation} from "@apollo/client";
import {CREATE_REVIEW} from "../graphql/queries.js";
import {useHistory} from 'react-router-native';


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        fontSize: 18,
        margin: 10,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: theme.colors.textSecondary,
        padding: 3
    },
    errorField: {
        borderColor: theme.colors.error,

    },
    separator: {
        height: 10,
    }
});

/*
* repository owner name
* repository name
* rating between 0 and 100
* review
* button create review
* */
const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',

};

const ReviewForm = () => {
    const [createReview] = useMutation(CREATE_REVIEW);
    const history = useHistory();
    const onSubmit=async(values)=>{
        const review = {...values, rating: parseInt(values.rating)};
        const {data} = await createReview({variables: {review}});
        if(data && data.createReview){
           console.log("reviewData", data);
            history.push(`/repo/${data.createReview.repositoryId}`);
        }

    };

    const validationSchema = yup.object().shape({
        ownerName: yup.string().required("repository's owner name is required"),
        repositoryName: yup.string().required("repository name is required"),
        rating: yup.number().required("rating is required").min(0, "rating must be >= 0").max(100, "rating must be <= 100"),
        text: yup.string(),
    });

    return (
        <View style={styles.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                 validationSchema={validationSchema}
            >
                {({handleSubmit, errors})=>(
                    <View>
                        <FormikTextInput
                        name="ownerName"
                        placeholder="Repository owner's name"
                        style={errors.username ? [styles.input, styles.errorField] : styles.input}
                        />
                        <FormikTextInput
                            name="repositoryName"
                            placeholder="Repository name"
                            style={errors.username ? [styles.input, styles.errorField] : styles.input}
                        />
                        <FormikTextInput
                            name="rating"
                            placeholder="Rating between 0 and 100"
                            style={errors.username ? [styles.input, styles.errorField] : styles.input}
                        />
                        <FormikTextInput
                            name="text"
                            placeholder="Review"
                            style={errors.username ? [styles.input, styles.errorField] : styles.input}
                            multiline={true}
                            textAlignVertical="top"
                        />
                        <ItemSeparator style={styles.separator}/>
                        <Button
                        title="Create Review"
                        type="submit"
                        onPress={handleSubmit}
                        />
                    </View>

                )}
            </Formik>
        </View>
    );


};

export default ReviewForm;
import React from 'react';

import {View, StyleSheet, Button} from 'react-native';
import {Formik} from "formik";
import FormikTextInput from "./FormikTextInput.jsx";
import theme from "../theme.js";

import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn.js";
import {useHistory} from 'react-router-native';


const styles = StyleSheet.create({
    container: {
        padding: 30,

    },
    input: {
        fontSize: 18,
        margin: 4,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: theme.colors.textSecondary,
        padding: 3
    },
    separator: {
        marginTop: 8,
    },
    errorField: {
        borderColor: theme.colors.error,
    }

});

const Separator = ({...props}) => <View {...props}/>;

const initialValues = {
    username: '',
    password: ''
};

const validationSchema = yup.object().shape({
    username: yup.string().required('username is required'),
    password: yup.string().required('password is required'),
});


export const SignInContainer=({onSubmit})=>{
    return(
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({handleSubmit, errors}) => (
                <View>
                    <FormikTextInput
                        name="username"
                        placeholder="Username"
                        style={errors.username ? [styles.input, styles.errorField] : styles.input}
                        autoCompleteType="username"
                        testID='username'
                    />
                    <FormikTextInput
                        name="password"
                        placeholder="Password"
                        style={errors.password ? [styles.input, styles.errorField] : styles.input}
                        secureTextEntry={true}
                        autoCompleteType="password"
                        autoCorrect={false}
                        testID='password'
                    />
                    <Separator style={styles.separator}/>
                    <Button
                        title="Sign in"
                        type="submit"
                        onPress={handleSubmit}
                        testID='submitbutton'
                    />
                </View>
            )}
        </Formik>
    );
};


const SignIn = () => {
    const signIn = useSignIn();
    const history = useHistory();

    const onSubmit = async (values) => {
        const {username, password} = values;
        try{
            await signIn({username, password});
            history.push('/');  // redirect

        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <SignInContainer onSubmit={onSubmit}/>
        </View>

    );
};

export default SignIn;


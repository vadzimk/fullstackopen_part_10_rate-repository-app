import React from 'react';
import Text from './Text.jsx';
import {View, StyleSheet, Button} from 'react-native';
import {Formik} from "formik";
import FormikTextInput from "./FormikTextInput.jsx";
import theme from "../theme.js";

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
        padding:3
    },
    separator: {
        marginTop: 8,
    }

});

const Separator =({...props})=><View {...props}/>;

const SignIn = () => {

    const initialValues = {
        username: '',
        password: ''
    };

    const validate = values => {
        const errors = {};
        if (!values.username) errors.username = 'Required';
        if (!values.password) errors.password = 'Required';

        return errors;
    };

    const onSubmit = (values) => {
        console.log("values", values);
    };


    return (
        <View style={styles.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
            >
                {({handleSubmit}) => (
                    <View>
                        <FormikTextInput
                            name="username"
                            placeholder="Username"
                            style={styles.input}
                            autoCompleteType="username"
                        />
                        <FormikTextInput
                            name="password"
                            placeholder="Password"
                            style={styles.input}
                            secureTextEntry={true}
                            autoCompleteType="password"
                            autoCorrect={false}
                        />
                        <Separator style={styles.separator}/>
                        <Button
                            title="Sign in"
                            type="submit"
                            onPress={handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>

    );
};

export default SignIn;


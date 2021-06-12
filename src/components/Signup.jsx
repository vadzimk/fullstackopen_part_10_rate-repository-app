import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Formik} from "formik";
import * as yup from "yup";
import useSignUp from "../hooks/useSignUp.js";
import FormikTextInput from "./FormikTextInput.jsx";
import theme from "../theme.js";
import {useHistory} from "react-router-native";

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

const initialValues = {
    username: "",
    password: "",
    passConfirm: ""
};

const validationSchema = yup.object().shape({
    username: yup.string().required('username is required').min(1, "min 1 character").max(30, "max 30 characters"),
    password: yup.string().required('password is required').min(5, "min 5 characters").max(50, "max 50 characters"),
    passConfirm: yup.string().required('password confirmation is required').test('passwords match', 'passwords must match', function (val) { // validate two fields against each other
        // console.log("yup.ref", this.resolve(yup.ref('password')));
        // console.log("val", val);

        return this.resolve(yup.ref('password')) === val;}),
});

const Separator = ({...props}) => <View {...props}/>;

const SignUp = () => {
    const signUp = useSignUp();
    const history = useHistory();
    const onSubmit = async (values) => {

        try {
            const {error} = await signUp(values);
            if (!error) {
                history.push('/signin');
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {
                    ({handleSubmit, errors}) => (
                        <View>
                            <FormikTextInput
                                name="username"
                                placeholder="Username"
                                style={errors?.username ? [styles.input, styles.errorField] : styles.input}
                                autoCompleteType="username"
                                testID='username'
                            />
                            <FormikTextInput
                                name="password"
                                placeholder="Password"
                                style={errors?.password ? [styles.input, styles.errorField] : styles.input}
                                secureTextEntry={true}
                                autoCompleteType="password"
                                autoCorrect={false}
                                testID='password'
                            />
                            <FormikTextInput
                                name="passConfirm"
                                placeholder="Password confirmation"
                                style={errors?.password ? [styles.input, styles.errorField] : styles.input}
                                secureTextEntry={true}
                                autoCompleteType="password"
                                autoCorrect={false}
                                testID='passConfirm'
                            />
                            <Separator style={styles.separator}/>
                            <Button
                                title="Sign up"
                                type="submit"
                                onPress={handleSubmit}
                                testID='submitbutton'
                            />
                        </View>
                    )
                }
            </Formik>
        </View>
    );
};

export default SignUp;



import React from 'react';
import Text from './Text.jsx';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
});

const SignIn = ()=>{
    return(
        <View style={styles.container}>
            <Text>Sign in view</Text>
        </View>

    );
};

export default SignIn;


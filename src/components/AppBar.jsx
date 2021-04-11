import React from 'react';
import {View, StyleSheet} from "react-native";
import Constants from 'expo-constants';
import {Appbar, Button} from 'react-native-paper';
import theme from '../theme.js';
import {Link} from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
    bar: {
        backgroundColor: theme.colors.textPrimary,
    },

});

const AppBar = () => {


    return <View style={styles.container}>
        <Appbar style={styles.bar}>
            <Link
                to="/signin"
            >
                <Button icon="login" color="#FFF"/>
            </Link>
            <Link
                to="/"
            >
                <Button icon="source-repository-multiple" color="#FFF"/>
            </Link>
        </Appbar>
    </View>;
};


export default AppBar;
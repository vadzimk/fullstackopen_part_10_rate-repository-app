import React from 'react';
import {View, StyleSheet, ScrollView, Text} from "react-native";
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
        flexDirection: "row",
        justifyContent: 'flex-start',
        padding: 5,
    },

});

const AppBar = () => {


    return <View style={styles.container}>
        <View style={styles.bar}>
            <ScrollView horizontal>
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

            </ScrollView>


        </View>
    </View>;
};


export default AppBar;
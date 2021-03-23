import React from 'react';
import {View, StyleSheet, Alert} from "react-native";
import Constants from 'expo-constants';
import {Appbar} from 'react-native-paper';
import theme from '../theme.js';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
    bar: {
        backgroundColor: theme.colors.textPrimary,
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <Appbar style={styles.bar}>
            <Appbar.Action

                icon="source-repository-multiple" onPress={() => Alert.alert("Pressed repos")}
            />
        </Appbar>
    </View>;
}


export default AppBar;
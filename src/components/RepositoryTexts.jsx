import React from "react";
import {View, StyleSheet} from 'react-native';

import Text from './Text.jsx';
import theme from "../theme.js";

const styles = StyleSheet.create({
    languageStyle: {
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
        color: '#FFF'
    },
    container: {
        marginLeft: 10,
        paddingRight: 10,
        flexDirection: 'column',
        alignItems: 'flex-start'


    }
});

const RepositoryTexts = ({item}) => {
    return (
        <View style={styles.container}>
            <Text fontWeight="bold">{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text style={[styles.languageStyle]}>{item.language}</Text>
        </View>
    );
};

export default RepositoryTexts;
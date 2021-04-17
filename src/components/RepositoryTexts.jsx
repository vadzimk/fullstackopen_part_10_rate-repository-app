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
        // paddingRight: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexShrink: 1
    }
});

const RepositoryTexts = ({item}) => {
    return (
        <View style={styles.container}>
            <Text fontWeight="bold" testID="name">{item.fullName}</Text>
            <Text testID="description">{item.description}</Text>
            <Text style={[styles.languageStyle]} testID="language">{item.language}</Text>
        </View>
    );
};

export default RepositoryTexts;
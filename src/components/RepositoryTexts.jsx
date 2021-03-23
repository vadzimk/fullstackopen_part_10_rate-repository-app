import React from "react";
import {View, StyleSheet} from 'react-native'

import Text from './Text.jsx';
import theme from "../theme.js";

const styles = StyleSheet.create({
    languageStyle: {
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
        color: '#FFF',
    },
    container: {
        marginLeft: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 1,


    },
    flexItem: {
        margin: 1,

    }
});

const RepositoryTexts=({item})=>{
    return(
        <View style={styles.container}>
            <Text fontWeight="bold" style={styles.flexItem}>{item.fullName}</Text>
            <Text style={styles.flexItem}>{item.description}</Text>
            <Text style={[styles.languageStyle, styles.flexItem]}>{item.language}</Text>
        </View>
    )
}

export default RepositoryTexts;
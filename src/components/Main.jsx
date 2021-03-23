import React from 'react';

import {StyleSheet, View} from 'react-native';
import RepositoryList from "./RepositoryList.jsx";
import Text from './Text.jsx';
import AppBar from "./AppBar.jsx";


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar/>
            <Text fontWeight={'bold'} fontSize={'subheading'} style={{textAlign: 'center'}}>Rate Repository Application</Text>
            <RepositoryList/>
        </View>
    )
}

export default Main;

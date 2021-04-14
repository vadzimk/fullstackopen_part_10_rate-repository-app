import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Main from './src/components/Main.jsx';
import {NativeRouter} from "react-router-native";
import Constants from "expo-constants";

import {ApolloProvider} from "@apollo/client";
import createApolloClient from "./src/utils/aplloClient.js";


const apolloClient = createApolloClient();

export default function App() {
console.log(Constants.manifest.extra);

    return (
        <PaperProvider>
            <View style={styles.container}>
                <NativeRouter>
                    <ApolloProvider client={apolloClient}>
                        <Main/>
                    </ApolloProvider>
                </NativeRouter>
                <StatusBar style="auto"/>
            </View>
        </PaperProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

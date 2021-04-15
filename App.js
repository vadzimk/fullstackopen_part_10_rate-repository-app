import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Main from './src/components/Main.jsx';
import {NativeRouter} from "react-router-native";


import {ApolloProvider} from "@apollo/client";
import createApolloClient from "./src/utils/aplloClient.js";
import AuthStorage from "./src/utils/authStorage.js";
import AuthStorageContext from "./src/contexts/AuthStorageContext.js";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {


    return (
        <PaperProvider>
            <View style={styles.container}>
                <NativeRouter>
                    <ApolloProvider client={apolloClient}>
                        <AuthStorageContext.Provider value={authStorage}>
                            <Main/>
                        </AuthStorageContext.Provider>
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

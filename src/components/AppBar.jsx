import React from 'react';
import {View, StyleSheet, ScrollView, Text} from "react-native";
import Constants from 'expo-constants';
import {Button} from 'react-native-paper';
import theme from '../theme.js';
import {Link} from 'react-router-native';
import {GET_AUTHORIZATION} from "../graphql/queries.js";
import {useApolloClient, useQuery} from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage.js";
import {useHistory} from 'react-router-native';


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

    const {data} = useQuery(GET_AUTHORIZATION);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const history = useHistory();

    const user = data ? data.authorizedUser : undefined;

    const handleLogout = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
        history.push('/signin');
    };

    return <View style={styles.container}>
        <View style={styles.bar}>
            <ScrollView horizontal>

                {
                    user
                        ? <Button onPress={handleLogout} icon="logout" color="#F00"/>
                        : <>
                            <Link
                                to="/signin"
                            >
                                <Button icon="login" color="#0F0"/>
                            </Link>
                            <Link
                                to="/signup"
                            >
                                <Button icon="account-plus-outline" color="#0F0"/>
                            </Link>
                        </>
                }

                <Link
                    to="/"
                >
                    <Button icon="source-repository-multiple" color="#FFF"/>
                </Link>
                {
                    user
                    && <Link to="/review-form" style={{justifyContent: 'center'}}>
                        <Text style={{color: "#FFF"}}>Review</Text>
                    </Link>
                }

            </ScrollView>
        </View>
    </View>;
};


export default AppBar;
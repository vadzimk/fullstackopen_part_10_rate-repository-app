import React from 'react';

import {StyleSheet, View} from 'react-native';
import RepositoryList from "./RepositoryList.jsx";
import Text from './Text.jsx';
import AppBar from "./AppBar.jsx";
import {Route, Switch, Redirect} from 'react-router-native';

import theme from '../theme';
import SignIn from "./SignIn.jsx";
import SingleRepositoryView from "./SingleRepositoryView.jsx";
import ReviewForm from "./ReviewForm.jsx";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.mainBackground,
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: 'stretch'
    },
    header: {
        textAlign: 'center',
        fontFamily: theme.fonts.main
    }
});


const Main = () => {




    return (
        <View style={styles.container}>
            <AppBar/>
            <Text
                fontWeight={'bold'}
                fontSize={'subheading'}
                style={styles.header}>
                Rate Repository Application
            </Text>
            <Switch>
                <Route path={"/"} exact>
                    <RepositoryList/>
                </Route>
                <Route path={"/signin"}>
                    <SignIn/>
                </Route>
                <Route path="/repo/:id">
                    <SingleRepositoryView/>
                </Route>
                <Route path="/review-form">
                    <ReviewForm/>
                </Route>
                <Redirect to={"/"}/>
            </Switch>

        </View>
    );
};

export default Main;

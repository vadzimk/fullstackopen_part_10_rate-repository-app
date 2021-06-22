import React from 'react';
import {FlatList, Text, StyleSheet} from "react-native";
import {useQuery} from "@apollo/client";
import {GET_AUTHORIZED_USER} from "../graphql/queries.js";

import ItemSeparator from "./ItemSeparator.jsx";
import ReviewItemWithActions from "./ReviewItemWithActions.jsx";


const styles = StyleSheet.create({
    separator: {
        height: 5
    }
});

const MyReviews = () => {
    const variables = {includeReviews: true};
    const {data, loading, refetch } = useQuery(GET_AUTHORIZED_USER, {variables,  fetchPolicy: 'cache-and-network',});

    if (loading) return <Text>Loading...</Text>;
    const reviews = data?.authorizedUser.reviews.edges.map((edge)=>edge);


    return <FlatList
        data={reviews}
        renderItem={({item}) => <ReviewItemWithActions review={item.node} title={item.node.repository.fullName} refetch={refetch}/>}
        keyExtractor={({node}) => node.id}
        ItemSeparatorComponent={() => <ItemSeparator style={styles.separator}/>}

    />;


};

export default MyReviews;
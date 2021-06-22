import React from 'react';
import {FlatList, Text, StyleSheet} from "react-native";
import {useQuery} from "@apollo/client";
import {GET_AUTHORIZED_USER} from "../graphql/queries.js";
import ReviewItem from "./ReviewItem.jsx";
import ItemSeparator from "./ItemSeparator.jsx";

const styles = StyleSheet.create({
    separator: {
        height: 5
    }
});

const MyReviews = () => {
    const variables = {includeReviews: true};
    const {data, loading} = useQuery(GET_AUTHORIZED_USER, {variables,  fetchPolicy: 'cache-and-network',});

    if (loading) return <Text>Loading...</Text>;
    const reviews = data?.authorizedUser.reviews.edges.map((edge)=>edge);

    return <FlatList
        data={reviews}
        renderItem={({item}) => <ReviewItem review={item.node} title={item.node.repository.fullName}/>}
        keyExtractor={({node}) => node.id}
        ItemSeparatorComponent={() => <ItemSeparator style={styles.separator}/>}

    />;


};

export default MyReviews;
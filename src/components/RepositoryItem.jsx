import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        textAlign: 'left',
        fontSize: 16,
        margin: 20,
    },
});

const RepositoryItem=({item})=>{
    return <View style={styles.container}>
        <Text>Full name: {item.fullName}</Text>
        <Text>Description: {item.description}</Text>
        <Text>Language: {item.language}</Text>
        <Text>Stars: {item.stargazersCount}</Text>
        <Text>Forks: {item.forksCount}</Text>
        <Text>Reviews: {item.reviewCount}</Text>
        <Text>Rating: {item.ratingAverage}</Text>
    </View>
}

export default RepositoryItem;
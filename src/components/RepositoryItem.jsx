import React from 'react';
import {Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    paragraph: {
        textAlign: 'center',
        fontSize: 16,
        margin: 20,
    },
});

const RepositoryItem=({item})=>{
    return <Text style={styles.paragraph}>
        <Text>Full name: {item.fullName}</Text>
        <Text>Description: {item.description}</Text>
        <Text>Language: {item.language}</Text>
        <Text>Stars: {item.stargazersCount}</Text>
        <Text>Forks: {item.forksCount}</Text>
        <Text>Reviews: {item.reviewCount}</Text>
        <Text>Rating: {item.ratingAverage}</Text>
    </Text>
}

export default RepositoryItem;
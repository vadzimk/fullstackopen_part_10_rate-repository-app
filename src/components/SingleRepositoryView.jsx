import React from 'react';
import {View, StyleSheet} from 'react-native';
import RepositoryItem from "./RepositoryItem.jsx";
import {Button} from "react-native-paper";
import useSingleRepo from "../hooks/useSingleRepo.js";
import * as Linking from 'expo-linking';
import useRepositories from "../hooks/useRepositories.js";
import {useParams} from "react-router-native";
import {FlatList} from "react-native";
import useReviews from "../hooks/useReviews.js";
import ItemSeparator from "./ItemSeparator.jsx";
import Text from './Text.jsx';
import ReviewItem from "./ReviewItem.jsx";

const styles = StyleSheet.create({
    buttonContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        marginBottom: 10
    },
    separator: {
        height: 5
    },
    reviewItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 15,
        backgroundColor: '#FFF'
    },
    ratingColumnStyle: {
        marginRight: 15,
    },
    textColumnStyle:{
        flexShrink: 1
    },
    circle: {
        borderRadius: 20,
        height: 40,
        width: 40,
        borderColor: '#00F',
        borderWidth: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingTextStyle: {
        marginTop: 5,
    },
    ratingValueStyle: {
        color: '#00F',
    },
    userNameStyle: {
        fontWeight: "800"
    }
});

const RepositoryInfo = ({repo}) => {
    const {id} = useParams();
    const {repositories} = useRepositories();
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];


    const handlePress = () => {
        if (repo && repo.url)
            Linking.openURL(repo.url);
    };

    return (
        <View>
            <RepositoryItem item={repositoryNodes.find(item => item.id === id)}/>
            <View style={styles.buttonContainer}>
                <Button onPress={handlePress} mode="contained" color="blue">Open in GitHub</Button>
            </View>
        </View>
    );
};




const SingleRepositoryView = () => {
    const {id} = useParams();
    const {data:reviews, fetchMore} = useReviews({id, first: 2});
    const repo = useSingleRepo(id);
    if (!reviews) {
        return <Text>Loading...</Text>;
    }



    return (
        <FlatList
            data={reviews}
            renderItem={({item}) => <ReviewItem review={item.node} title={item.node.user.username}/>}
            keyExtractor={({node}) => node.id}
            ListHeaderComponent={() => <RepositoryInfo repo={repo}/>}
            ItemSeparatorComponent={() => <ItemSeparator style={styles.separator}/>}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.5}
        />
    );
};

export default SingleRepositoryView;
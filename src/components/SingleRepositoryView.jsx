import React from 'react';
import {View, StyleSheet} from 'react-native';
import RepositoryItem from "./RepositoryItem.jsx";
import {Button} from "react-native-paper";
import useSingleRepo from "../hooks/useSingleRepo.js";
import * as Linking from 'expo-linking';
import useRepositories from "../hooks/useRepositories.js";
import {useParams} from "react-router-native";

const styles = StyleSheet.create({
    buttonContainer:{
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20
}
});

const SingleRepositoryView = ()=>{
    const {id} = useParams();
    const {repositories} = useRepositories();
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
    console.log("repositoryNodes", repositoryNodes);
    console.log("id", id);


    const repo = useSingleRepo(id);
    console.log("repo", repo);


    const handlePress=()=>{
        if (repo && repo.url)
        Linking.openURL(repo.url);
    };
    return(
        <View>
            <RepositoryItem item={repositoryNodes.find(item=>item.id === id)}/>
            <View style={styles.buttonContainer}>
                <Button onPress={handlePress} mode="contained" color="blue">Open in GitHub</Button>
            </View>

        </View>
    );
};

export default SingleRepositoryView;
import React from 'react';
import {FlatList, View, StyleSheet} from "react-native";
import RepositoryItem from "./RepositoryItem.jsx";
import useRepositories from "../hooks/useRepositories.js";

const styles = StyleSheet.create({
    separator: {
        height: 5,
    },

});


const ItemSeparator = () => {
    return <View style={styles.separator}/>;
};

const RepositoryList = () => {
    const {repositories} = useRepositories(); // custom hook


    // get nodes fro edges array
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];


    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({item, index, separators}) => (
                <RepositoryItem
                    item={item}
                    key={item.id}
                />
            )}
        />
    );
};

export default RepositoryList;
import React from 'react';

import RepositoryItem from "./RepositoryItem.jsx";
import {FlatList, StyleSheet, View} from "react-native";


const styles = StyleSheet.create({
    separator: {
        height: 5,
    },

});


const ItemSeparator = () => {
    return <View style={styles.separator}/>;
};


const RepositoryListContainer = ({repositories}) => {

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

export default RepositoryListContainer;
import React from 'react';

import RepositoryItem from "./RepositoryItem.jsx";
import {FlatList, StyleSheet, Pressable, Text} from "react-native";
import {useHistory} from 'react-router-native';
import ItemSeparator from "./ItemSeparator.jsx";
import RepositoryListHeader from "./RepositoryListHeader.jsx";
import useSelectRepo from "../hooks/useSelectRepo.js";

const styles = StyleSheet.create({
    separator: {
        height: 5,
    },

});


const RepositoryListContainer = ({repositories, onEndReach, ...rest }) => {

    const {selectRepo} = useSelectRepo();

    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={() => <ItemSeparator style={styles.separator}/>}
            ListHeaderComponent={<RepositoryListHeader {...rest}/>}
            stickyHeaderIndices={[0]}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5} // how far from the end to trigger onEndReached, number in units of visible length of the list
            renderItem={({item, index, separators}) => (
                <Pressable onPress={() => selectRepo(item.id)}>
                    <RepositoryItem
                        item={item}
                        key={item.id}
                    />
                </Pressable>
            )}
        />
    );
};

export default RepositoryListContainer;
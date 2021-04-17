import React from 'react';

import RepositoryItem from "./RepositoryItem.jsx";
import {FlatList, StyleSheet, Pressable} from "react-native";
import {useHistory} from 'react-router-native';
import ItemSeparator from "./ItemSeparator.jsx";
const styles = StyleSheet.create({
    separator: {
        height: 5,
    },

});


const RepositoryListContainer = ({repositories}) => {

    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
    const history = useHistory();

    const selectRepo = (id)=>{
        history.push(`/repo/${id}`);
    };


    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={()=><ItemSeparator style={styles.separator}/>}
            renderItem={({item, index, separators}) => (
                <Pressable onPress={()=>selectRepo(item.id)}>
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
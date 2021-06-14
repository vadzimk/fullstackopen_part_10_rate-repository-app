import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import RepositoryTexts from "./RepositoryTexts.jsx";
import RepositoryStats from "./RepositoryStats.jsx";

const styles = StyleSheet.create({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',

    },
    container: {
        // textAlign: 'left',
        fontSize: 16,
        padding: 10,
    },
    avatar: {
        width: 60,
        height: 60,

    },

});

const RepositoryItem = ({item}) => {
    if(!item) return null;
    return <View style={styles.container}>
        <View style={styles.flexRow}>
            <Image
                style={styles.avatar}
                source={{
                    uri: item.ownerAvatarUrl,
                }}
            />
            <RepositoryTexts
                item={item}
            />
        </View>
        <RepositoryStats item={item}/>


    </View>;
};

export default RepositoryItem;
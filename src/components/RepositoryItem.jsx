import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import RepositoryTexts from "./RepositoryTexts.jsx";
import RepositoryStats from "./RepositoryStats.jsx";

const styles = StyleSheet.create({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',

    },
    container: {
        textAlign: 'left',
        fontSize: 16,
        margin: 20,
    },
    avatar: {
        width: 60,
        height: 60,

    },

});

const RepositoryItem = ({item}) => {
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
}

export default RepositoryItem;
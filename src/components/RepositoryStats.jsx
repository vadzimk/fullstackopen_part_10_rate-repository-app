import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from "./Text.jsx";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,

    },
    textItem: {
        textAlign: 'center',
    }
});

const Stat = ({value, name}) => {
    return (<View>
        <Text fontWeight="bold" style={styles.textItem}>{value}</Text>
        <Text style={styles.textItem}>{name}</Text>
    </View>);
};

const makeString = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1).concat('k') : num.toString();
};

const RepositoryStats = ({item}) => {
    return (
        <View style={styles.container}>
            <Stat
                value={makeString(item.stargazersCount)}
                name="Stars"
            />
            <Stat
                value={makeString(item.forksCount)}
                name="Forks"
            />
            <Stat
                value={makeString(item.reviewCount)}
                name="Reviews"
            />
            <Stat
                value={makeString(item.ratingAverage)}
                name="Rating"
            />
        </View>
    );
};

export default RepositoryStats;
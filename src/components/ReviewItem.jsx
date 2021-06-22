import React from 'react';
import {StyleSheet, View} from "react-native";
import Text from "./Text.jsx";
import {format} from "date-fns";

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

const ReviewItem = ({review, title}) => {

    return (
        <View style={styles.reviewItemContainer}>
            <View style={styles.ratingColumnStyle}>
                <View style={styles.circle}>
                    <Text
                        fontWeight="bold"
                        fontSize="subheading"
                        style={styles.ratingValueStyle
                        }>
                        {review.rating}
                    </Text>
                </View>

            </View>
            <View style={styles.textColumnStyle}>
                <View>
                    <Text fontWeight="bold">{title}</Text>
                </View>
                <View>
                    <Text color="textSecondary" fontWeight="bold">{format(new Date(review.createdAt), 'yyyy-mm-dd')}</Text>
                </View>
                <View style={styles.ratingTextStyle}>
                    <Text>{review.text}</Text>
                </View>
            </View>

        </View>
    );
};

export default ReviewItem;
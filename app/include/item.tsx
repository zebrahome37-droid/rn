import {StyleSheet, Image, Text, View, Dimensions } from "react-native";
import React from "react";
const { width } = Dimensions.get('window');

const Item: React.FC = (props: Object) => {

    return (
        <View style={styles.flex}>
            <Image style={styles.item} source={props.item.imageUrl} />
            <Text style={styles.text}>{props.item.title}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: '100%',
        flex : 1 ,
        resizeMode : 'contain'
    },
    flex : {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 15,
        height: width * 0.65
    },
    text: {
        paddingTop: 5,
        textAlign: 'center',
    },

});

export default Item;
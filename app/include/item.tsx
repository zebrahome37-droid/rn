import {Pressable, StyleSheet, Image, Text, View, Dimensions} from "react-native";
import React from "react";
import {useRouter, Router} from 'expo-router';

const {width} = Dimensions.get('window');

interface ItemProps {
    id: string;
    price1: string;
    price2: string;
    title: string;
    imageUrl: { uri: string };
}

const Item: React.FC<ItemProps> = (props: ItemProps): React.JSX.Element => {
    const router:Router = useRouter();

    return (
        <Pressable
            onPress={():void => {
                router.push({
                    pathname: '/detail',
                    params: {id: props.item.id, category: 'electronics'},
                });
            }}>
            <View style={styles.flex}>
                <Image style={styles.item} source={props.item.imageUrl}/>
                <View style={styles.bottom}>
                    <Text style={styles.title}>{props.item.title}</Text>
                    <View style={styles.prices}>
                        <View style={styles.priceRow}>
                            <Text style={styles.price}>{props.item.price1}</Text><Text
                            style={styles.groupName}>оптом</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.price}>{props.item.price2}</Text><Text style={styles.groupName}>в
                            розницу</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'contain'
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 15,
        paddingTop: 7,
        paddingBottom: 14,
        height: width * 0.80,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.05,
        shadowRadius: 7.84,
        elevation: 2.5, // For Android
        borderRadius: 8,
    },
    title: {
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 16,
        color: '#333333'
    },
    bottom: {},
    prices: {
        paddingLeft: 18,
        paddingTop: 5
    },
    price: {
        fontSize: 12
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    groupName: {
        color: '#A3A3A3',
        paddingLeft: 8,
        fontSize: 11
    }

});

export default Item;
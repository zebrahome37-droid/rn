import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {FlashList} from "@shopify/flash-list";
import Item from "./include/item";

const { width } = Dimensions.get('window');

const DATA = [
    { id: '1', title: 'Image One', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/a17/328_437_1/t4ramig5xhpby21b1i12ot8p1w70x6op.jpg' } },
    { id: '2', title: 'Image Two', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/a17/328_437_1/t4ramig5xhpby21b1i12ot8p1w70x6op.jpg' } },
    { id: '3', title: 'Image 3', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/a17/328_437_1/t4ramig5xhpby21b1i12ot8p1w70x6op.jpg' } },
    { id: '4', title: 'Image 4', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/a17/328_437_1/t4ramig5xhpby21b1i12ot8p1w70x6op.jpg' } },
];

const App: React.FC = () => {
    return <SafeAreaProvider>
        <View style={container}>
            <ScrollView>
                <View style={grid}>
                    <FlashList
                        style={grid}
                        data={DATA}
                        renderItem={({item}) => <Item item={item}/>}
                        estimatedItemSize={width * 0.65}
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ScrollView>
        </View>
    </SafeAreaProvider>;
};

const {container, grid} = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
    grid: {}
});

export default App;
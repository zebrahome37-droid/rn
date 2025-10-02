import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View, ListRenderItem} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {FlashList } from "@shopify/flash-list";
import Item from "./include/item";

const { width } = Dimensions.get('window');

interface ItemType {
    id: string;
    price1: string;
    price2: string;
    title: string;
    imageUrl: { uri: string };
}

const DATA: ItemType[] = [
    { id: '1', price1: '100 ₽', price2: '388 ₽', title: 'Женское платье М-208 / черный', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/a17/328_437_1/t4ramig5xhpby21b1i12ot8p1w70x6op.jpg' } },
    { id: '2', price1: '100 ₽', price2: '388 ₽', title: 'Женское платье М-208 / серый', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/216/328_437_1/1pom4f9l2sc0px789jurqhb6wvt70cno.jpg' } },
    { id: '3', price1: '100 ₽', price2: '388 ₽', title: 'Женское платье М-999 / Пихта кофе', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/9b8/328_437_1/03vmprb3wtw8mkfekoacrg2nz3391njx.jpg' } },
    { id: '4', price1: '100 ₽', price2: '388 ₽', title: 'Женское платье М-982 / Знаки', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/5ce/328_437_1/8affqyl50po4sa80kxfh3eiloizk0c26.jpg' } },
    { id: '5', price1: '100 ₽', price2: '388 ₽', title: 'Женское платье М-956 / Манстера', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/d1b/328_437_1/llaya6zg9oqu4pgjo36bxfrzv12l0b3f.jpg' } },
    { id: '6', price1: '100 ₽', price2: '388 ₽', title: 'Женское платье М-956 / Абстракция Абстракция', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/996/328_437_1/10ojy7moxl2fg42t7j1q69nph5equdmx.jpg' } },
    { id: '7', price1: '100 ₽', price2: '388 ₽', title: 'Женское платье 428-4 / кофейное', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/0c8/328_437_1/nq8gshj9wlumxjf0h9aawh754z9334do.jpg' } },
    { id: '8', price1: '100 ₽', price2: '338 ₽', title: 'Платье женское Ариадна Ц Арт. 10494', imageUrl: { uri: 'https://texrio.ru/upload/resize_cache/iblock/491/328_437_1/hoq30xo3jukenotwtmbm22aci3g6x4xb.jpeg' } },
];

const App: React.FC = () => {
    const renderItem: ListRenderItem<ItemType> = ({ item }) => {
        return <Item item={item} />;
    };
    return <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>
                <View>
                    <FlashList<ItemType>
                        data={DATA}
                        renderItem={renderItem}
                        estimatedItemSize={width * 0.65}
                        numColumns={2}
                        keyExtractor={(item:ItemType):string=> item.id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>;
};

/*
const {text} = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: '500',
    }
});
*/

export default App;
import React from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable, Dimensions} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {SimpleImageSliderThemeProvider, SimpleImageSlider} from '@one-am/react-native-simple-image-slider';
import SizeTable from './include/sizeTableWithoutFlatList';

const {width} = Dimensions.get('window');

const AddToCart = ({ title, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : styles.buttonNormal,
            ]}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

const HomeScreen = () => {
    const params = useLocalSearchParams();
    const photos = [
        'https://texrio.ru/upload/iblock/cce/qh1l61f7bkgu04mygl8arehxxeynlzp5.jpg',
        'https://texrio.ru/upload/iblock/21a/gjtzyg55ev582le04lsvzuimzxhjyud3.jpg',
        'https://texrio.ru/upload/iblock/5ec/okni3xdhxh39e54le5n4qz5sap4gm3gw.jpg'
    ]
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>Женское платье М-983 / Знаки</Text>
                        <View style={styles.container}>
                            <SimpleImageSliderThemeProvider>
                                <SimpleImageSlider
                                    style={styles.slider}
                                    data={photos.map((photo, index) => ({
                                        source: photo,
                                        key: index.toString(),
                                    }))}
                                    imageWidth={width * 0.90}
                                    imageAspectRatio={100 / 175}
                                    fullScreenEnabled={true}
                                    renderFullScreenDescription={(_, index) => (
                                        <Text style={{ color: '#ffffff' }}>Picture {index}</Text>
                                    )}
                                />
                            </SimpleImageSliderThemeProvider>
                        </View>
                        <View style={styles.middle}>
                            <SizeTable />
                            <AddToCart title={"В корзину"} onPress={() => { alert(1) }} />
                        </View>
                        <View style={styles.description}>
                            <Text style={{fontSize: 18}}>Описание</Text>
                            <Text>
                                Женская пижама Ангелина представляет собой теплую женскую модель с длинным рукавом, созданную для максимального комфорта в прохладное время года.
                                Пижама станет отличным выбором для тех, кто ценит комфорт и качество. Натуральный хлопок обеспечивает хорошую воздухопроницаемость и приятные тактильные ощущения при носке. Модель особенно актуальна в осенне-зимний период, когда важно сохранять тепло во время сна.
                            </Text>
                        </View>
                        <View style={styles.props}>
                            <View style={styles.propsTitle}>
                                <Text style={{fontSize: 18}}>Дополнительная информация:</Text>
                            </View>
                            <View style={styles.prop}>
                                <Text>Свойство: </Text><Text>Значение</Text>
                            </View>
                            <View style={styles.prop}>
                                <Text>Свойство: </Text><Text>Значение</Text>
                            </View>
                            <View style={styles.prop}>
                                <Text>Свойство: </Text><Text>Значение</Text>
                            </View>
                            <View style={styles.prop}>
                                <Text>Свойство: </Text><Text>Значение</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    slider : {
        flex: 1,
        maxHeight: 600
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,

    },
    buttonNormal: {
        backgroundColor: '#fe9c9c', // Blue color for normal state
    },
    buttonPressed: {
        backgroundColor: '#a93e3e', // Darker blue when pressed
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    middle: {
        flex: 1,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    description : {
        paddingVertical: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    props : {
        paddingVertical: 30
    },
    prop : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingVertical: 10,
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        borderBottomStyle: 'dotted'
    }
});

export default HomeScreen;
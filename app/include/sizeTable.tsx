import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TextInput,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const data = Array.from({ length: 18 }, (_, i) => ({ id: i.toString(), title: `Item ${i + 1}` }));
const NUM_COLUMNS = 3;



const MyComponent = () => {
    const [inputValues, setInputValues] = useState({});

    const onChangeText = (text, rowIndex) => {
        setInputValues(prev => ({ ...prev, [rowIndex]: text }));
    };

    const renderItem = ({ item, index }) => {
        const columnIndex = index % NUM_COLUMNS;
        const rowIndex = Math.floor(index / NUM_COLUMNS);
        const isOddRow = rowIndex % 2 !== 0;

        const backgroundColor = !isOddRow ? '#FFF' : '#F2F5F7';

        if (columnIndex === NUM_COLUMNS - 1) {
            return (
                <View style={[styles.itemContainer, { backgroundColor }, styles.inputContainer]}>
                    <TextInput
                        style={styles.input}
                        placeholder={`Input ${rowIndex + 1}`}
                        value={inputValues[rowIndex] || ''}
                        onChangeText={(text) => onChangeText(text, rowIndex)}
                    />
                </View>
            );
        }
        return (
            <View style={[styles.itemContainer, { backgroundColor }]}>
                <Text>{item.title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                numColumns={NUM_COLUMNS}
                renderItem={renderItem}
                style={styles.flatList}
                contentContainerStyle={styles.contentContainer}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        flex: 1,
    },
    contentContainer: {
        padding: 10,
    },
    itemContainer: {
        width: (width - 4 * 8) / 3, // расчет ширины
        height: 50,

        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
    },

    input: {
        width: '90%',
        height: 40,
    },
});

export default MyComponent;
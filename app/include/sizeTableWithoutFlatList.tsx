import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
} from 'react-native';

//const data = Array.from({ length: 10 }, (_, i) => ({ id: i.toString(), title: `Item ${i + 1}` }));

const data = [
    {
        id: 1,
        title: '42',
        price1: 120,
        price2: 138
    },
    {
        id: 2,
        title: '44',
        price1: '9999 ₽',
        price2: '9999 ₽'
    },
    {
        id: 3,
        title: '46',
        price1: 120,
        price2: 138
    },
    {
        id: 4,
        title: '48',
        price1: 120,
        price2: 138
    },
    {
        id: 5,
        title: '50',
        price1: 120,
        price2: 138
    },
]

const QuantityControl = ({ title, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.QuantityControl,
                pressed ? styles.buttonPressed : styles.buttonNormal,
            ]}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

const SizeTable = () => {

    const [quantities, setQuantities] = useState(
        data.reduce((acc, item) => {
            acc[item.id] = '1';
            return acc;
        }, {})
    );

    // Функция изменения значения для конкретного id
    const changeQuantity = (id, newQuantity) => {
        // Можно убрать ведущие нули, проверить на число и минимальное значение
        const value = newQuantity.replace(/[^0-9]/g, ''); // оставляем только цифры
        setQuantities(prev => ({
            ...prev,
            [id]: value === '' ? '' : String(parseInt(value, 10)),
        }));
    };

    // Увеличить количество
    const increment = (id) => {
        const current = parseInt(quantities[id] || '0', 10);
        changeQuantity(id, String(current + 1));
    };

    // Уменьшить количество, минимум 1
    const decrement = (id) => {
        const current = parseInt(quantities[id] || '1', 10);
        if (current > 1) {
            changeQuantity(id, String(current - 1));
        }
    };


    // --- Функции для изменения всех значений сразу ---
    const changeAllQuantities = (newQuantity) => {
        const value = newQuantity.replace(/[^0-9]/g, '');
        const val = value === '' ? '' : String(Math.max(1, parseInt(value, 10)));
        const updated = {};
        data.forEach(item => {
            updated[item.id] = val;
        });
        setQuantities(updated);
    };

    const incrementAll = () => {
        const updated = {};
        data.forEach(item => {
            const current = parseInt(quantities[item.id] || '0', 10);
            updated[item.id] = String(current + 1);
        });
        setQuantities(updated);
    };

    const decrementAll = () => {
        const updated = {};
        data.forEach(item => {
            const current = parseInt(quantities[item.id] || '1', 10);
            updated[item.id] = String(Math.max(1, current - 1));
        });
        setQuantities(updated);
    };

    // Среднее значение или 1, чтобы показать в поле "все одновременно"
    const allValues = Object.values(quantities);
    const allEqual = allValues.every(val => val === allValues[0]);
    const allDisplayValue = allEqual ? allValues[0] : '';

    return (
        <View style={styles.flex}>
            <View style={[styles.row, { backgroundColor: '#eef', borderTopWidth: 2, borderTopColor: '#99f' }]}>
                <Text style={{ fontWeight: 'bold', width: 60, textAlign: 'center', }}>Размер</Text>
                <Text style={{ fontWeight: 'bold', width: 60, textAlign: 'center', }}>Опт</Text>
                <Text style={{ fontWeight: 'bold', width: 60, textAlign: 'center', }}>Роз</Text>
                <View style={[styles.quantity, {justifyContent: 'center'}]}>
                    <Text style={{ fontWeight: 'bold' }}>Количество</Text>
                </View>
            </View>
            {data.map((item) => (
                <View style={styles.row} key={item.id}>
                    <Text style={{ width: 60, textAlign: 'center' }}>{item.title}</Text>
                    <Text style={{ width: 60, textAlign: 'center' }}>{item.price1}</Text>
                    <Text style={{ width: 60, textAlign: 'center' }}>{item.price2}</Text>
                    <View style={styles.quantity}>
                        {/* Кнопка - минус */}
                        <QuantityControl title="-" onPress={() => decrement(item.id)} />

                        {/* Текстовое поле */}
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={quantities[item.id]}
                            onChangeText={text => changeQuantity(item.id, text)}
                        />

                        {/* Кнопка - плюс */}
                        <QuantityControl title="+" onPress={() => increment(item.id)} />
                    </View>
                </View>
            ))}
            {/* Строка для изменения всех значений */}
            <View style={[styles.row, { backgroundColor: '#eef', borderTopWidth: 2, borderTopColor: '#99f' }]}>
                <Text style={{ fontWeight: 'bold' }}>Изменить все:</Text>
                <View style={styles.quantity}>
                    <QuantityControl title="-" onPress={decrementAll} />
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={allDisplayValue}
                        placeholder={allEqual ? undefined : 'разные'}
                        onChangeText={text => changeAllQuantities(text)}
                    />
                    <QuantityControl title="+" onPress={incrementAll} />
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    flex: {
        flex: 1,
    },
    input: {
        marginHorizontal: 8,
        borderWidth: 0,
        borderColor: '#CCC',
        height: 35,
        width: 20,
        textAlign: 'center',
        fontSize: 14,
        paddingVertical: 0,

    },
    quantity: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 105
    },
    QuantityControl: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        marginHorizontal: 0,
        borderRadius: 4,
    },
    buttonPressed: {
        backgroundColor: '#bbb', // цвет при нажатии
    },
    buttonNormal: {
        backgroundColor: '#ddd',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default SizeTable;
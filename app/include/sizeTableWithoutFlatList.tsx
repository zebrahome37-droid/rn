import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TextInput,
    Dimensions, Pressable,
} from 'react-native';

const data = Array.from({ length: 18 }, (_, i) => ({ id: i.toString(), title: `Item ${i + 1}` }));

const SizeTable = () => {
    return (
        <View style={styles.flex}>
            {data.map((item, index) => (
                <View style={styles.row}>
                    <Text>{item.title}</Text>
                    <Text>{item.id}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    row : {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
    },
    flex : {
        flex: 1,
        width: '100%',
    }
})

export default SizeTable;
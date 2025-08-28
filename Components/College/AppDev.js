import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const data = [
    { id: 1, users: require("./assets/reactnative.jpg"), press: 'reactnative' },
    { id: 2, users: require("./assets/javaapp.jpg"), press: 'Javaapp' },
    { id: 3, users: require("./assets/flutterapp.jpg"), press: 'Flutterapp' },
    { id: 4, users: require("./assets/kotlinapp.jpeg"), press: 'Kotlinapp' },
    { id: 5, users: require("./assets/unitygame.jpeg"), press: 'Unitygame' },

];

const AppDev = () => {
    const navigation = useNavigation();

    const renderItem = ({ item, index }) => (
        <TouchableOpacity 
            onPress={() => navigation.navigate(item.press)} 
            style={[styles.itemContainer, { backgroundColor: colors[index % colors.length] }]}
            activeOpacity={0.7}
        >
            <Image source={item.users} style={styles.image} />
        </TouchableOpacity>
    );

    return (
        <LinearGradient colors={['#ff8c00', '#ff0080']} style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} 
                showsVerticalScrollIndicator={false}
            />
        </LinearGradient>
    );
};

// 🎨 **Vibrant Color Palette for Grid Items**
const colors = ['#ff4f4f', '#4fafff', '#ffbf47', '#5fcf65', '#a47fff', '#ff77a9'];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
    },
    image: {
        width: 130,
        height: 130,
        resizeMode: 'cover',
        borderRadius: 15,
    },
});

export default AppDev;

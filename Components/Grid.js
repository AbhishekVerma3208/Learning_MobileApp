import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Grid = () => {
    const navigation = useNavigation();
    const Data = [
        { id: 1, users: require("../Components/College/assets/WebDev1.jpg"), title: "Web Development", press: () => navigation.navigate('WebDev') },
        { id: 2, users: require("../Components/College/assets/AppDev.jpg"), title: "App Development", press: () => navigation.navigate('AppDev') },
        { id: 3, users: require("../Components/College/assets/humanskills.png"), title: "human skills", press: () => navigation.navigate('humanskills') },
        { id: 4, users: require("../Components/College/assets/humanskills.png"), title: "English speaking", press: () => navigation.navigate('EnglishSpeaking') },
        
    ];

    return (
        <LinearGradient colors={["#ff7e5f", "#feb47b"]} style={Styles.container}>
            <Text style={Styles.heading}>Our Services</Text>
            <FlatList
                data={Data}
                renderItem={({ item }) => (
                    <View style={Styles.GridContainer}>
                        <TouchableOpacity onPress={item.press}>
                            <Image source={item.users} style={Styles.imagegrid} />
                            <Text style={Styles.text}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
            />
        </LinearGradient>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 10,
    },
    GridContainer: {
        alignItems: "center",
        marginHorizontal: 8,
        backgroundColor: "#ffffffaa", // Semi-transparent white
        borderRadius: 12,
        overflow: "hidden",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    imagegrid: {
        height: 150,
        width: 150,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginTop: 8,
    },
});

export default Grid;

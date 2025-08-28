import { View, TextInput, ScrollView, Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import Grid from "./Grid";
import CoursesScreen from "./CourceSection";
import InteractiveLearning from "./InteractiveLearning";
import FooterHome from "./FooterHome";
import { BackHandler } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { FlatList } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
    // Expanded list of all navigable screens
    const Users = [
        { id: 1, press: 'WebDev', name: "Web Development" },
        { id: 2, press: 'AppDev', name: "App Development" },
        { id: 3, press: 'reactnative', name: "React Native" },
        { id: 4, press: 'Css', name: "CSS" },
        { id: 5, press: 'Javascript', name: "JavaScript" },
        { id: 6, press: 'Html', name: "HTML" },
        { id: 7, press: 'reactjs', name: "React JS" },
        { id: 8, press: 'Nodejs', name: "Node JS" },
        { id: 9, press: 'Expressjs', name: "Express JS" },
        { id: 10, press: 'MongoDb', name: "MongoDB" },
        { id: 11, press: 'Nextjs', name: "Next JS" },
        { id: 12, press: 'Flutterapp', name: "Flutter" },
        { id: 13, press: 'Kotlinapp', name: "Kotlin" },
        { id: 14, press: 'Javaapp', name: "Java" },
        { id: 15, press: 'Unitygame', name: "Unity Game Development" },
        { id: 16, press: 'EnglishSpeaking', name: "English Speaking" },
        { id: 17, press: 'humanskills', name: "Human Skills" },
        { id: 18, press: '30dayschallenge', name: "30 Days Challenge" },
        { id: 19, press: 'speak_confidently', name: "Speak Confidently" },
        { id: 20, press: 'HrStudenttalk', name: "HR Student Talk" },
    ];

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => backHandler.remove();
    }, []);

    const handleBackPress = () => {
        Alert.alert('Exit App', 'Are you sure you want to exit?', [
            { text: 'Cancel', onPress: () => null, style: 'cancel' },
            { text: 'Exit', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
    };

    const [search, setSearch] = useState('');

    const filteredUsers = Users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <LinearGradient colors={["#4b0082", "#8e24aa"]} style={Styles.UpperPart}>
                    <View style={{ top: "50%", left: "5%" }}>
                        <TextInput
                            style={Styles.Search}
                            placeholderTextColor="#fff"
                            placeholder="🔍 What do you want to learn today?"
                            onChangeText={(text) => setSearch(text)}
                            value={search}
                        />
                    </View>
                    
                    {/* Search Results */}
                    {search.length > 0 && (
                        <View style={Styles.searchResultContainer}>
                            <FlatList
                                data={filteredUsers}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={Styles.searchItem}
                                        onPress={() => {
                                            setSearch(''); // Clear search input
                                            navigation.navigate(item.press);
                                        }}
                                    >
                                        <Text style={Styles.searchItemText}>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                                ListEmptyComponent={
                                    <Text style={Styles.noResultsText}>No results found</Text>
                                }
                            />
                        </View>
                    )}
                </LinearGradient>
                
                <View style={{ flex: 1, borderTopColor: "white", borderWidth: 4 }}>
                    <Grid />
                    <CoursesScreen />
                    <InteractiveLearning />
                    <FooterHome />
                </View>
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    UpperPart: {
        height: 230,
        width: "100%",
        paddingTop: 50,
    },
    noResultsText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
        padding: 20,
    },
    Search: {
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#ffa027",
        width: 345,
        height: 45,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: "#fff",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    searchResultContainer: {
        marginTop: 10,
        marginHorizontal: 20,
        maxHeight: 300,
        backgroundColor: "#2d0b4e",
        borderRadius: 12,
        padding: 10,
        zIndex: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
    },
    searchItem: {
        backgroundColor: "#3a1563",
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#5c136b",
    },
    searchItemText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0.5,
    },
});

export default Home;
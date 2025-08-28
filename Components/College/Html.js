import React from 'react';
import { View, StyleSheet, Platform, BackHandler, Text, TouchableOpacity, Linking } from 'react-native';
import Pdf from 'react-native-pdf';
import { useEffect, useState } from 'react';

const Html = () => {

    const [currentPage, setCurrentPage] = useState(1);



    useEffect(() => {
        const backAction = () => {
            return true; // Prevent back action
        };

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => backHandler.remove(); // Remove event listener on unmount
    }, []);


    const handlePress = () => {
        Linking.openURL("https://youtu.be/HcOc7P5BMi4?si=K2fm4ihcdcxdpGnb");
    };

    const source = { uri: 'bundle-assets://pdf/HTMLDOCUMENTATION.pdf' };
    return (

        <View style={styles.container}>

            <Pdf

                //when not loaded then use this down line 
                trustAllCerts={false}
                source={source}
                onLoadComplete={(numberOfPages) => {
                    console.warn(`PDF loaded with ${numberOfPages} pages.`);
                }}

                onPageChanged={(page) => {
                    setCurrentPage(page);
                }}


                onError={(error) => {
                    console.log('PDF Load Error:', error);
                }}
                style={styles.pdf}
                enablePaging={true}
            />

            <View style={styles.pageNumberContainer}>
                <Text style={styles.pageNumberText}>
                    Page {currentPage} 
                </Text>
            </View>

            <Text style={{ backgroundColor: "orange", justifyContent: "center", textAlign: "center" }}>Click a link ⬇️</Text>
            <TouchableOpacity style={{ backgroundColor: "orange", justifyContent: "center", textAlign: "center" }} onPress={handlePress}> <Text>https://youtube.com/playlist?list=PL8p2I9GklV468O2wk... </Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    pdf: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    pageNumberContainer: {
        position: "absolute",
        bottom: 50,
        left: "50%",
        transform: [{ translateX: -50 }],
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: 8,
        borderRadius: 8,
    },
    pageNumberText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Html;

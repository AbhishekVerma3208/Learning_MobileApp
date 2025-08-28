import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
const StartingScreen = ({navigation}) => {



  useEffect(() => {
    const checkUser = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        navigation.navigate("LoginScreen");
      }
    };

    checkUser();
  })

  const handleGetStarted = () => {
    navigation.navigate('LoginScreen'); // change 'Home' to your target screen name
  };

  return (
    <View style={styles.container}>
      {/* Learning Image */}
      <Image
        source={require('./College/assets/Lxbackcolor.jpg')} // Replace with your image path
        style={styles.image}
        resizeMode="contain"
      />

      {/* Welcoming Text */}
      <Text style={styles.title}>
        Welcome to our App!
      </Text>
      <Text style={styles.subtitle}>
        Discover, learn, and grow with our interactive Features .
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEEFB3', // Light, colorful background
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 31,
    fontWeight: "black",
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    fontStyle: 'italic',
    letterSpacing: 0.5,
  },
  button: {
    backgroundColor: '#FF6F61', // A vibrant button color
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: '600',
  },
});

export default StartingScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert,ActivityIndicator} from 'react-native';
import { Avatar, Card, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getAuth,signOut } from '@react-native-firebase/auth';
import { BackHandler } from "react-native"

const LearnerProfile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [course, setCourse] = useState('React Native 101');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        navigation.replace("LoginScreen");
      }
    };

    checkUser();

    const loadUserData = async () => {
      try {
        const nameuser = await AsyncStorage.getItem('name');
        const emailuser = await AsyncStorage.getItem('email');
        const photouser = await AsyncStorage.getItem('photo');

        setName(nameuser || 'Unknown');
        setEmail(emailuser || 'No Email');
        setPhoto(photouser ? photouser.toString() : 'https://www.w3schools.com/w3images/avatar2.png');
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    loadUserData();

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => backHandler.remove(); // Cleanup function
  }, []);

  const handleSave = () => {
    console.log('Profile updated:', { name, email, course });
  };

  const handleBackPress = () => {
    Alert.alert('Exit App', 'Are you sure you want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Exit',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  const signOut = async () => {

    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          setLoading(true); // Show loader
          setTimeout(async () => {
            // try {
              await GoogleSignin.signOut();
              await getAuth().signOut();
              await AsyncStorage.clear();
              setLoading(false); // Hide loader
              // Alert.alert('Signed Out', 'You have been logged out.');
              navigation.replace("LoginScreen");
            // } catch (error) {
            //   setLoading(false);
            //   console.error('Sign-out error:', error);
            // }
          }, 3000); // Wait for 3 seconds
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity >
          <Avatar.Image
            size={121}
            source={{ uri: photo }}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profileEmail}>{email}</Text>
      </View>

      <Card style={styles.infoCard}>
        <Card.Title
          title="Profile Information"
          titleStyle={styles.cardTitle}
        />
        <Card.Content>
          <Text style={styles.label}>Course Enrolled</Text>
          <TextInput
            mode="outlined"
            label="Course"
            value={course}
            onChangeText={setCourse}
            style={styles.input}
            theme={{ colors: { primary: '#6200EE' } }}
          />
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save Changes
      </Button>

      <Button mode="contained" onPress={signOut} style={[styles.button, styles.signOutButton]}>
        Sign Out
      </Button>

      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#6200EE" />
          <Text style={styles.loadingText}>Signing Out...</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  header: {
    backgroundColor: '#0e6860',
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileEmail: {
    fontSize: 16,
    color: '#e0e0e0',
    marginTop: 4,
  },
  infoCard: {
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 3,
    marginBottom: 20,
  },
  cardTitle: {
    color: '#0e6860',
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 8,
    borderRadius: 25,
    backgroundColor: '#6200EE',
  },
  signOutButton: {
    backgroundColor: 'red',
    marginBottom: 30,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#6200EE',
  },
});

export default LearnerProfile;

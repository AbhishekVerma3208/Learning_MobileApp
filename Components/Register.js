import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Vector Icons
import { getAuth, GoogleAuthProvider,createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import app from "./app"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackHandler } from "react-native"
import SplashScreen from "./Splashscreen";

const RegisterScreen = ({ navigation }, onGoogleSignIn) => {
  //define state
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track if splash should be shown

  const auth = getAuth(app);

useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        
        return () => backHandler.remove(); // Cleanup function
    }, []);

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


  useEffect(() => {

    const checkAuthState = async () => {
      const user = await getAuth().currentUser;
      if (user) {
        navigation.replace("Home"); // Navigate to Home if already authenticated
      }
      else {
        // Otherwise, remove the splash and show login
        setIsLoading(false);
      }
    };

    checkAuthState();

    // Configure Google Sign-In
    GoogleSignin.configure({
      webClientId: "165763079976-8fma85ced05m5ij91qaju490uparvn9k.apps.googleusercontent.com",
    });
  }, []); // Empty dependency array ensures this runs only once after component mounts

  //signinwithgoogle
  const signInWithGoogle = async () => {
    try {
      // Check if Play services are available on the device {showPlayServicesUpdateDialog:true}
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Perform the sign-in process and capture user info
      const userInfo = await GoogleSignin.signIn();

      //  console.log("Google Sign-In successful:", userInfo); // Log user info

      //  // Check the complete user info structure to confirm token extraction
      //  console.log("Full user info:", JSON.stringify(userInfo, null, 2)); // More detailed log


      const { idToken } = userInfo?.data || {};
      await AsyncStorage.setItem("token", idToken);

      //  const { idToken } = userInfo.data;
      // Make sure idToken is accessed correctly
      const { email, name, photo } = userInfo.data.user
      AsyncStorage.setItem("email", email);
      AsyncStorage.setItem("name", name);
      AsyncStorage.setItem("photo", photo);

      //  console.log("idToken:", idToken); // Log the idToken

      if (!idToken) {
        console.log("idToken is undefined!");  // Debugging log if idToken is missing
        return;
      }

      // Create a Firebase credential with the idToken
      const googleCredential = GoogleAuthProvider.credential(idToken);

      // Sign in to Firebase with the Google credentials
      await auth.signInWithCredential(googleCredential);
      console.log("Firebase authentication successful");

      setIsLoading(true); // show splash screen
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000); // delay 3 sec after login
      
      onGoogleSignIn(true);

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Sign-in is already in progress");
      } else {
        console.error("Google Sign-In error:", error); // Log the full error
      }
    }
  };
  if (isLoading) {
    return <SplashScreen navigation={navigation} />;
  }

  const handlesignup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth,email, password);
      AsyncStorage.setItem("token", "123");
      console.log("User logged in!");
      setIsLoading(true); // show splash screen
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000); // delay 3 sec after login
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      Alert.alert("Login Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={()=>handlesignup(email,password)}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      {/* Already have an account? */}

      <Text style={styles.loginText}>
        Already have an account?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.loginLink}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={signInWithGoogle} style={{top:55,left:-87}}>
        <Image source={require("../Components/College/assets/Google-auth.png")} style={{ width: 50, height: 50, borderRadius: 20 }} />
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212", // Dark background
    padding: 20,
  },
  heading: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#1e1e1e",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    color: "white",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1e1e1e",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    color: "white",
  },
  registerButton: {
    backgroundColor: "#ff5722",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  registerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    color: "#ccc",
  },
  loginLink: {
    color: "#ff5722",
    fontWeight: "bold",
  },
};

export default RegisterScreen;

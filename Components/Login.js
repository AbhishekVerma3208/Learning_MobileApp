import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import app from "./app"
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "./Splashscreen";
import { BackHandler } from "react-native"

const LoginScreen = ({ navigation }, onGoogleSignIn) => {
  //define state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track if splash should be shown
  //call auth function

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



  const auth = getAuth(app);
  useEffect(() => {

    const checkAuthState = async () => {
      const user = await getAuth().currentUser;
      if (user) {
        // If a user is found, wait for a short period and then navigate to Home
        setTimeout(() => {
          navigation.replace("Home");
        }, 1000);
      } else {
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
        navigation.navigate("Home");
      }, 3000); // 3-second splash screen

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

  //data returning point

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      AsyncStorage.setItem("token", "123");
      AsyncStorage.setItem("email", email);
      AsyncStorage.setItem("name", "learner");
      setIsLoading(true); // show splash screen
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000); // delay 3 sec after login
      console.log("User logged in!");
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      Alert.alert("Login Error", error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

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

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin(email, password)}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>Don't have an account?</Text>

      <TouchableOpacity style={{
        height: 100, width: 100, top: -17.5, left: 110,
      }} delayPressIn={0} onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.signupLink}>Sign Up</Text>
      </TouchableOpacity>


      <TouchableOpacity onPressIn={signInWithGoogle}>
        <Image source={require("./College/assets/Google-auth.png")} style={{ width: 50, height: 50, top: 55, left: -87, borderRadius: 20 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
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
  forgotText: {
    color: "#999",
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#ff5722",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  signupText: {
    color: "#ccc",
    right: 20,
  },
  signupLink: {
    color: "#ff5722",
    fontWeight: "bold",
  },
};

export default LoginScreen;

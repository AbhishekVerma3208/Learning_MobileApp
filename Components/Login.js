import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const saveApiData = async () => {
    const data = {
      email: email, 
      password: password
    };

    try {
      const url = "http://192.168.96.155:3000/login"; // Replace with your actual local IP
      let result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let response = await result.json();
      console.log(response); 
      Alert.alert("Success", "Data sent to server!");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to send data.");
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

      <TouchableOpacity style={styles.loginButton} onPress={saveApiData}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>Don't have an account?</Text>   
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style={styles.signupLink}>Sign Up</Text>
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
    top: -17.5,
    left: 80,
  },
};

export default LoginScreen;

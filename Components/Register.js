import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Vector Icons

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      {/* Already have an account? */}

      <Text style={styles.loginText}>
        Already have an account?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.loginLink}>Login</Text>
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

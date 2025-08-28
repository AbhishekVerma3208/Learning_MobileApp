// GoogleAuth.js
import React, { useEffect } from 'react';
import { getAuth, GoogleAuthProvider } from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import app from './app';

const GoogleAuth = ({ onGoogleSignIn }) => {
  const auth = getAuth(app);

  // Configure Google Sign-In
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "165763079976-8fma85ced05m5ij91qaju490uparvn9k.apps.googleusercontent.com",
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      // Check if Play services are available on the device
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Perform the sign-in process and capture user info
      const userInfo = await GoogleSignin.signIn();

      const { idToken } = userInfo?.data || {};

      if (!idToken) {
        console.log("idToken is undefined!");
        return;
      }

      // Create a Firebase credential with the idToken
      const googleCredential = GoogleAuthProvider.credential(idToken);

      // Sign in to Firebase with the Google credentials
      await auth.signInWithCredential(googleCredential);
      console.log("Firebase authentication successful");

      // Execute callback function on success
      onGoogleSignIn(true);  // Notify the parent component that sign-in was successful
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Sign-in is already in progress");
      } else {
        console.error("Google Sign-In error:", error);
      }
    }
  };

  return {
    signInWithGoogle
  };
};

export default GoogleAuth;

// firebase.js (or firebase.config.js)
import { initializeApp } from "firebase/app";

// Your Firebase configuration object.  NEVER expose these keys publicly.
// Use environment variables for production.
const firebaseConfig = {
    apiKey: "AIzaSyAbY_xyJ-0I_tXQzmKkTE5PXTNnTCSvrE0", 
    authDomain: "com.learning_xorxos", 
    projectId: "learningxorxos", 
    messagingSenderId: "165763079976", 
    appId: "1:165763079976:android:4cda544ee3068ed752fa1d", 
  };

// Initialize Firebase app.  Check if already initialized.
let app;  // Declare app outside the if block
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  if (!/already initialized/.test(error.message)) {
    console.error("Firebase initialization error", error.message);
  }
  app = getApp(); // if already initialized, use getApp()
}


export default app; // Export the initialized app instance
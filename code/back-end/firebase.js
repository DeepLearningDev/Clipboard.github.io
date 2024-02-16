import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6D9K12sRE62blp8i9SgzJEhm-tImXH5M",
  authDomain: "clipboard-app-server.firebaseapp.com",
  databaseURL: "https://clipboard-app-server-default-rtdb.firebaseio.com/",
  projectId: "clipboard-app-server",
  storageBucket: "clipboard-app-server.appspot.com",
  messagingSenderId: "1027682382694",
  appId: "1:1027682382694:web:20fb6badc35da5fe31cea7",
  measurementId: "G-31C4Z961QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

// Function to sign in with Google
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // Handle successful sign-in
            console.log('Successfully signed in with Google');
        })
        .catch((error) => {
            // Handle errors
            console.error('Error signing in with Google:', error.message);
        });
};

// Function to sign in as guest
const signInAsGuest = () => {
    signInAnonymously(auth)
        .then((result) => {
            // Handle successful sign-in
            console.log('Successfully signed in as guest');
        })
        .catch((error) => {
            // Handle errors
            console.error('Error signing in as guest:', error.message);
        });
};

export { app, analytics, database, auth, signInWithGoogle, signInAsGuest };

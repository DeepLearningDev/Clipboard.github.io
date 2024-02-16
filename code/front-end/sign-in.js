import { getAuth, signInWithPopup, signInAnonymously, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Get the Firebase authentication instance
const auth = getAuth();

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

export { signInWithGoogle, signInAsGuest };
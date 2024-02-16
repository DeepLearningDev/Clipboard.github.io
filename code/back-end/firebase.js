import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
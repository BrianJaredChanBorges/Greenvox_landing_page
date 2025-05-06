// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw4IXKXCLqWrlXGFoG3IiBpGFH6hr8Kw8",
  authDomain: "greenvox-d60b1.firebaseapp.com",
  projectId: "greenvox-d60b1",
  storageBucket: "greenvox-d60b1.appspot.com",
  messagingSenderId: "618867891445",
  appId: "1:618867891445:web:c53ac9fb4867cde8e5b9bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export db
export { db };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-u97SJud5V3JCPoUUw_uLj4FG5yK51pc",
  authDomain: "enroot-group4-gallery.firebaseapp.com",
  projectId: "enroot-group4-gallery",
  storageBucket: "enroot-group4-gallery.firebasestorage.app",
  messagingSenderId: "211146412378",
  appId: "1:211146412378:web:92dbe0ebf8cc3548166363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }
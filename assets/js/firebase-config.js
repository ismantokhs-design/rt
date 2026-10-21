// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx2AF0YRpOEq--q__dn39NwiNCKXvKutM",
  authDomain: "erte-979ca.firebaseapp.com",
  projectId: "erte-979ca",
  storageBucket: "erte-979ca.firebasestorage.app",
  messagingSenderId: "329513636032",
  appId: "1:329513636032:web:25a10b627b91db2bbb5d25",
  measurementId: "G-VQ7N0NJFKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firestore Database agar bisa dipanggil di halaman lain (Absensi, Rapat, Keuangan)
export const db = getFirestore(app);
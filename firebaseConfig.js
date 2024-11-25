// firebaseConfig.js
import firebase from "firebase/app";
import "firebase/analytics"; // Import Firebase Analytics

const firebaseConfig = {
  apiKey: "AIzaSyDluziH6WjCr3u9xvIIpdtqOzJIsM_AcM4",
  authDomain: "fir-dd693.firebaseapp.com",
  projectId: "fir-dd693",
  storageBucket: "fir-dd693.firebasestorage.app",
  messagingSenderId: "328321963035",
  appId: "1:328321963035:web:8740d509162bde785594be",
  measurementId: "G-0N5G4C7589",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // If already initialized, use the default app
}

const analytics = firebase.analytics();

export { analytics };

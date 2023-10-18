import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDvbNx6RyHJ0HYZZxeCQgCB-GbOTJ6qh6c",
  authDomain: "bionise-7b1b7.firebaseapp.com",
  projectId: "bionise-7b1b7",
  storageBucket: "bionise-7b1b7.appspot.com",
  messagingSenderId: "286770179700",
  appId: "1:286770179700:web:eeab4c98af79f0042a6b21",
  measurementId: "G-90FB4VZX0J",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

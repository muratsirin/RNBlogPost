import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4CxYM8XAmmWKCiMzptAARFoj3YVUeS4A",
  authDomain: "rnblogpost.firebaseapp.com",
  projectId: "rnblogpost",
  storageBucket: "rnblogpost.appspot.com",
  messagingSenderId: "93458539763",
  appId: "1:93458539763:web:dd9ecba760709f7ac5c386",
};

export const firebase = initializeApp(firebaseConfig);

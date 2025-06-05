// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//This web apps Firebase Configurations
const firebaseConfig = {
  apiKey: "AIzaSyBxtS_LwfmeqkB24D8RYODVf5lZmBg4-JU",
  authDomain: "rigo-portfolio.firebaseapp.com",
  projectId: "rigo-portfolio",
  storageBucket: "rigo-portfolio.appspot.com",
  messagingSenderId: "853036926825",
  appId: "1:853036926825:web:281204bb7aba67f6351ff8"
};

//Initlizae Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

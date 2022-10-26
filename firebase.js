// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD_879Hm4gJ30vP4cR2MjTkHT-o1JwpZHk",
  authDomain: "opentwit-my-project.firebaseapp.com",
  projectId: "opentwit-my-project",
  storageBucket: "opentwit-my-project.appspot.com",
  messagingSenderId: "504060320016",
  appId: "1:504060320016:web:3bdd8211f9e24da6d16d95",
  measurementId: "G-3M44N6GVP0",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

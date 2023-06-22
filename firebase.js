//put these in an env file

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjjDD6ge6nLWOhAHBYj45XdZXmPgBBvfQ",
  authDomain: "test-auth-a3a9b.firebaseapp.com",
  projectId: "test-auth-a3a9b",
  storageBucket: "test-auth-a3a9b.appspot.com",
  messagingSenderId: "489874731031",
  appId: "1:489874731031:web:884bf089dc7010eba06c52",
  gcmSenderId: "489874731031",
  bundleId: "host.exp.exponent",
  clientId:
    "489874731031-uo764c47rc98knr20oud7cughgcfh9m5.apps.googleusercontent.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore();

export { auth, db };

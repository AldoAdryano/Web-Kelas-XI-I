// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDONEXFmMpls4cTT_LiiPesKhF0-bovQMc",
  authDomain: "project-web-kelas-3ab0d.firebaseapp.com",
  projectId: "project-web-kelas-3ab0d",
  storageBucket: "project-web-kelas-3ab0d.appspot.com",
  messagingSenderId: "273105413459",
  appId: "1:273105413459:web:f009fbd6f7800e9c8bada6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

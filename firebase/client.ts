// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABr-0O94yDE0LxPGPKR4d8VEnIf3MV9eU",
  authDomain: "interviewly-54dfb.firebaseapp.com",
  projectId: "interviewly-54dfb",
  storageBucket: "interviewly-54dfb.firebasestorage.app",
  messagingSenderId: "992508048309",
  appId: "1:992508048309:web:a076a3d42bc2169c161ffc",
  measurementId: "G-8VSF7DJ09R"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const dm = getFirestore(app);


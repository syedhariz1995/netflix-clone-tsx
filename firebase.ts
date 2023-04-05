

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApwdE7TR30PGDgOpqLwgWuBtlzNqMt8FQ",
  authDomain: "netflix-clone-tsx-700e4.firebaseapp.com",
  projectId: "netflix-clone-tsx-700e4",
  storageBucket: "netflix-clone-tsx-700e4.appspot.com",
  messagingSenderId: "944997982190",
  appId: "1:944997982190:web:5c289be765c5a2bb8338ff"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
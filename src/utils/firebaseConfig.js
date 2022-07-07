import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDjrszeUZmGvEZkB86ScT6LFyWRxjuZJ8Q",
  authDomain: "melonplay-b2d74.firebaseapp.com",
  projectId: "melonplay-b2d74",
  storageBucket: "melonplay-b2d74.appspot.com",
  messagingSenderId: "919176302105",
  appId: "1:919176302105:web:4ea51421b9d65bbc58e488",
  measurementId: "G-SDTT3VWMPJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const DB = getFirestore(app)


export {auth, DB};



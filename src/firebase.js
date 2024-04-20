import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDJ4EdT0uNVMymEv42HfCxTtfwVFv24qwE",
  authDomain: "disneyplus-clone-25.firebaseapp.com",
  projectId: "disneyplus-clone-25",
  storageBucket: "disneyplus-clone-25.appspot.com",
  messagingSenderId: "682752777689",
  appId: "1:682752777689:web:e40dad550b8bfe89fc8dc8",
  measurementId: "G-PYS9R63MJ1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider=new GoogleAuthProvider()

export { db, auth, storage, provider };

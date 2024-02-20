// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore ,  collection, addDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAagpQw---3oKniEbCiAOJZfvWFZh18gP8",
  authDomain: "blocimmo-55be3.firebaseapp.com",
  databaseURL: "https://blocimmo-55be3-default-rtdb.firebaseio.com/",
  projectId: "blocimmo-55be3",
  storageBucket: "blocimmo-55be3.appspot.com",
  messagingSenderId: "1047675889389",
  appId: "1:1047675889389:web:3b1f54440aecd5fa61cee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth,db };
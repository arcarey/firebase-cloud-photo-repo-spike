// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv2jMDc0_95CLGmyrwMvCbpd3yf33QelE",
  authDomain: "civicly-fa2bf.firebaseapp.com",
  projectId: "civicly-fa2bf",
  storageBucket: "civicly-fa2bf.appspot.com",
  messagingSenderId: "513465780137",
  appId: "1:513465780137:web:9d24bf5579097f076566b8",
  measurementId: "G-KFHKDJNDLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = (getStorage(app));
const analytics = getAnalytics(app);

export default storage;
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaJd7APv5tcgnFcF3VTEL2llCVSHIj1Ds",
    authDomain: "join-ex.firebaseapp.com",
    projectId: "join-ex",
    storageBucket: "join-ex.appspot.com",
    messagingSenderId: "341650077174",
    appId: "1:341650077174:web:d9b45d1c80011650a543d7",
    measurementId: "G-XL1GHKB994"
  };

const  app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app; 
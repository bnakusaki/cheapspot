import { firebase, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDnTYjBGDf2xpJ3w6p_-r7fLs0de72caPU",
    authDomain: "cheapspot-588e0.firebaseapp.com",
    projectId: "cheapspot-588e0",
    storageBucket: "cheapspot-588e0.appspot.com",
    messagingSenderId: "363519694784",
    appId: "1:363519694784:web:f4fdb3f9b8f2d2315cda25",
    measurementId: "G-ZTGG2DXQSQ",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();

export { auth, db, firebase, storage };



import {
    GoogleAuthProvider,
    onAuthStateChanged as _onAuthStateChanged,
    sendPasswordResetEmail as _sendPasswordResetEmail,
    signInWithEmailAndPassword as _signInWithEmailAndPassword,
    signOut as _signOut,
    createUserWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

export async function signOut () {
    return await _signOut(auth);
}

// Sign-in functions.
export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider)
}



export async function signInWithApple() {
    // TODO: Create an Apple developer account to implement this feature.
    throw 'Unimplemented';
}

export async function signInWithFacebook() {
    // TODO: Create an Facebook developer account to implement this feature.
    throw 'Unimplemented';
}

export async function  signInWithEmailAndPassword(email, password){
    return await _signInWithEmailAndPassword(auth, email, password)
}

// Sign-up functions.
export async function  signUpWithEmailAndPassword(email, password){
    return await createUserWithEmailAndPassword(auth, email, password)
}

export function getCurrentUser(){
    return auth.currentUser;
}

export function onAuthStateChanged(cb) {
    return _onAuthStateChanged(auth, cb);
}

// Password resets.
export async function sendPasswordResetEmail (email) {
    return await _sendPasswordResetEmail(auth, email);
}

import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBY0bq7hRPhs8gwm7NKhr8Ff0emGiCbYUs",
    authDomain: "sprepwise.firebaseapp.com",
    projectId: "sprepwise",
    storageBucket: "sprepwise.firebasestorage.app",
    messagingSenderId: "1005441331384",
    appId: "1:1005441331384:web:413d7430e6300b3e53844d",
    measurementId: "G-CGV0ENLC3N"
};

const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
//Clase que realiza la conexion con firebase

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAeCp5opco7xI1O5cGyLzuhPMK_CsU607c",
    authDomain: "tecflix-34994.firebaseapp.com",
    projectId: "tecflix-34994",
    storageBucket: "tecflix-34994.appspot.com",
    messagingSenderId: "984631684287",
    appId: "1:984631684287:web:49860db19c521cacc1aa0a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
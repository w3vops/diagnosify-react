import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCs5b_8kkR5A99v-SFBcvTyPBy9XJn7ApU",
    authDomain: "diagnosify-web.firebaseapp.com",
    databaseURL: "https://diagnosify-web.firebaseio.com",
    projectId: "diagnosify-web",
    storageBucket: "diagnosify-web.appspot.com",
    messagingSenderId: "826476830900",
    appId: "1:826476830900:web:d95a95a1366125f7d2b7e1",
    measurementId: "G-6KX7SFRFFZ"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
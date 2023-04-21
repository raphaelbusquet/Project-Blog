import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDid96RbzwyQFqsy3HNmSDGXkQ8-MXmO34",
  authDomain: "miniblog-80baf.firebaseapp.com",
  projectId: "miniblog-80baf",
  storageBucket: "miniblog-80baf.appspot.com",
  messagingSenderId: "351345512096",
  appId: "1:351345512096:web:136b4f727e7a94487043c5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };
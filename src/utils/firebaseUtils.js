import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTZgGLSLOy5AruQmHYt4mIr31ge-xA7rk",
  authDomain: "sushi-store-backend.firebaseapp.com",
  databaseURL: "https://sushi-store-backend.firebaseio.com",
  projectId: "sushi-store-backend",
  storageBucket: "sushi-store-backend.appspot.com",
  messagingSenderId: "564289135855",
  appId: "1:564289135855:web:384784dc130c86c9b7671a",
  measurementId: "G-RLY94CLWP7",
};

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.firestore();

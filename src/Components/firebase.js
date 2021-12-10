import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC_U0HxI1apmE2mNNEVf03bDF0UpCQu2Zk",
  authDomain: "clone-ce66b.firebaseapp.com",
  databaseURL: "https://clone-ce66b.firebaseio.com",
  projectId: "clone-ce66b",
  storageBucket: "clone-ce66b.appspot.com",
  messagingSenderId: "933561899701",
  appId: "1:933561899701:web:d92f4582454f6f507e3cfc",
  measurementId: "G-SMB19JFNZ3",
});

const auth = firebase.auth();

export { auth };

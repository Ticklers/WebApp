import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGvtXnypuDq_v_qw9-sE9bZHfQjvb7xjI",
  authDomain: "ticklers-a6343.firebaseapp.com",
  databaseURL: "https://ticklers-a6343.firebaseio.com",
  projectId: "ticklers-a6343",
  storageBucket: "ticklers-a6343.appspot.com",
  messagingSenderId: "456993937193",
  appId: "1:456993937193:web:ca0d6a884674f0a5ef8938",
  measurementId: "G-1VYW5274NR",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };

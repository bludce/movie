import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCuoUdCdQLQt5eoemSmRsVgL863gbuR53A",
  authDomain: "movie-app-852d7.firebaseapp.com",
  databaseURL: "https://movie-app-852d7.firebaseio.com",
  projectId: "movie-app-852d7",
  storageBucket: "movie-app-852d7.appspot.com",
  messagingSenderId: "879646160938",
  appId: "1:879646160938:web:33a7b41c761c9130c9ab53",
  measurementId: "G-7JT5EB3HV8"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export { app };
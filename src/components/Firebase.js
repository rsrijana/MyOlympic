import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDmSA4LkcnPtFbS8nPZIZPLkoi-UFChrXE",
    authDomain: "health-monitoring-system-effe3.firebaseapp.com",
    databaseURL: "https://health-monitoring-system-effe3-default-rtdb.firebaseio.com",
    projectId: "health-monitoring-system-effe3",
    storageBucket: "health-monitoring-system-effe3.appspot.com",
    messagingSenderId: "460096777632",
    appId: "1:460096777632:web:4360c2a4daf006f25608c5",
    measurementId: "G-D2TYW1XD4K"
  };

  const Firebase = firebase.initializeApp(firebaseConfig);
  export default Firebase;
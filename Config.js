import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDkM04oPTaJhmZQNiQBJPH4HjON1aNdS7s",
  authDomain: "story-hub-2-8be43.firebaseapp.com",
  databaseURL: "https://story-hub-2-8be43-default-rtdb.firebaseio.com",
  projectId: "story-hub-2-8be43",
  storageBucket: "story-hub-2-8be43.appspot.com",
  messagingSenderId: "319551967100",
  appId: "1:319551967100:web:62e8740b9d177965e6def9"
};

let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();

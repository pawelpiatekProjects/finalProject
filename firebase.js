import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAYELSCPFbd8XkCWRoFgq0cIr55E9vg38I",
    authDomain: "finalproject-7b199.firebaseapp.com",
    databaseURL: "https://finalproject-7b199.firebaseio.com",
    projectId: "finalproject-7b199",
    storageBucket: "finalproject-7b199.appspot.com",
    messagingSenderId: "390334831945",
    appId: "1:390334831945:web:ef8520792888c48a7d4e98",
    measurementId: "G-XC17VTXJ6P"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

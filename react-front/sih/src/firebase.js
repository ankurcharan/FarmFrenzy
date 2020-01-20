const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyCiI79efC9vS7csAbi6F5Z5CwXDxN0w3a8",
    authDomain: "hackathon-192011.firebaseapp.com",
    databaseURL: "https://hackathon-192011.firebaseio.com",
    projectId: "hackathon-192011",
    storageBucket: "hackathon-192011.appspot.com",
    messagingSenderId: "146195363368",
    appId: "1:146195363368:web:c60059899a907153c1271d"
  };
  // Initialize Firebase
  const Firebase = firebase.initializeApp(firebaseConfig);


  export default Firebase;
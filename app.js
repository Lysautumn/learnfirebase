// Initialize Firebase
var config = {
  apiKey: "AIzaSyA6ReJpmTlII_IDpTE-aaGuF1DdSUy969E",
  authDomain: "learntofirebase-6f25f.firebaseapp.com",
  databaseURL: "https://learntofirebase-6f25f.firebaseio.com",
  storageBucket: "learntofirebase-6f25f.appspot.com",
  messagingSenderId: "1037947027255"
};
firebase.initializeApp(config);

var header = document.getElementById('header');

var dbRef = firebase.database().ref().child('header'); //reference to the database, points to the child


var signInButton = document.getElementById('signInButton');
var signOutButton = document.getElementById('signOutButton');
var provider = new firebase.auth.GoogleAuthProvider();

var playground = document.getElementById('playground');
var playgroundRef = firebase.database().ref().child('playground');

signInButton.addEventListener('click', function () {
  firebase.auth().signInWithPopup(provider).then(function (user) {
    if (user) {
      dbRef.on('value', function (snap) {
        header.innerText = snap.val();
      });

      playgroundRef.on('value', function (snap) {
        header.innerTest = snap.val();
      });
    }
  });
});

signOutButton.addEventListener('click', function () {
  firebase.auth().signOut().then(function () {
    header.innerText = 'Sign in to see the magic';
    playground.value = 'You need to sign in to play here!';
  });
});

playground.addEventListener('keyup', function () {
  playgroundRef.set(playground.value);
});

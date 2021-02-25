

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDwXSIffMJnFuFd9KNnyFDPJu_6_TEiNEY",
    authDomain: "random1-3bd15.firebaseapp.com",
    projectId: "random1-3bd15",
    storageBucket: "random1-3bd15.appspot.com",
    messagingSenderId: "612102040679",
    appId: "1:612102040679:web:aa766127c2c3fb4b3c78c2",
    measurementId: "G-X0C6PWK968"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function signOut() {
    // [START auth_sign_out]
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      window.location.href="index.html";
    }).catch((error) => {
      // An error happened.
    });
    // [END auth_sign_out]
    alert("Signed Out");
  }
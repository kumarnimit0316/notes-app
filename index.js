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



  
  function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    // [START auth_signup_password]
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        window.location.href="home.html";
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    // [END auth_signup_password]
    alert("Signed Up")
  }

  

  function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
               
        window.location.href="home.html";
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    // [END auth_signin_password]
    alert("Signed In");
  }
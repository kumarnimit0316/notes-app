

var firebaseConfig = {
  apiKey: "AIzaSyDwXSIffMJnFuFd9KNnyFDPJu_6_TEiNEY",
  authDomain: "random1-3bd15.firebaseapp.com",
  projectId: "random1-3bd15",
  storageBucket: "random1-3bd15.appspot.com",
  messagingSenderId: "612102040679",
  appId: "1:612102040679:web:aa766127c2c3fb4b3c78c2",
  measurementId: "G-X0C6PWK968"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();





function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {

      var user = userCredential.user;
      var use = firebase.auth().currentUser.uid;
      localStorage.setItem("uid", use);
      window.location.href = "home.html";

    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;

    });

  alert("Signed Up")
}



function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {

      var user = userCredential.user;
      var use = firebase.auth().currentUser.uid;
      localStorage.setItem("uid", use);
      window.location.href = "home.html";

      alert("Signed In");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("not signed up or wrong password");
    });


}






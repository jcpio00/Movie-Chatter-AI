
// Initialize Firebase

var firebaseConfig = {
  
  //  firebase configuration 

  apiKey: "AIzaSyCCy66Jq6TViCSEvJ2j2fUoLdFQ-Ov6L0s",

authDomain: "movie-chatter-ai.firebaseapp.com",

projectId: "movie-chatter-ai",

storageBucket: "movie-chatter-ai.appspot.com",

messagingSenderId: "308035459669",

appId: "1:308035459669:web:a05a1c4e4a0b5c32a792dc",

measurementId: "G-QK9LNNR77M"

};
firebase.initializeApp(firebaseConfig);

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log("Login successful!");

      // perform any necessary actions after successful login

      window.location.replace("home.html");


    })
    .catch(function(error) {
      console.error("Login failed:", error.message);
      document.getElementById("error-message").innerHTML = error.message;
      setTimeout(function() {
        document.getElementById("error-message").innerHTML = "";
      }, 8000);
     // window.location.replace("login.html");
    });
}

function signUp() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    document.getElementById("error-message").innerHTML = "Passwords do not match";
    setTimeout(function() {
      document.getElementById("error-message").innerHTML = "";
    }, 8000);
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log("Sign up successful!");
      // perform any necessary actions after successful sign up

      window.location.replace("home.html");


    })
    .catch(function(error) {
      console.error("Sign up failed:", error.message);
      document.getElementById("error-message").innerHTML = error.message;
      setTimeout(function() {
        document.getElementById("error-message").innerHTML = "";
      }, 8000);
    });
}





// Logout event listener

document.querySelector(".logout-btn").addEventListener("click", function() {
  firebase
    .auth()
    .signOut()
    .then(function() {

      // Logout successful, navigate to login page

      window.location.replace("login.html");
    })
    .catch(function(error) {

      // Handle errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode + ": " + errorMessage);
    });
  } 
) 
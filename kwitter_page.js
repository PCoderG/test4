var firebaseConfig = {
    apiKey: "AIzaSyAh8Ei_3aWJykkFIOYPeJWnNY3uHdQOWBc",
    authDomain: "studily-by-pratham.firebaseapp.com",
    databaseURL: "https://studily-by-pratham-default-rtdb.firebaseio.com",
    projectId: "studily-by-pratham",
    storageBucket: "studily-by-pratham.appspot.com",
    messagingSenderId: "436316485562",
    appId: "1:436316485562:web:97caadf2a6e0bfd40a8f83"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name");
  document.getElementById("room_name").innerHTML=room_name;
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        message:msg,
        user:user_name,
        likes:0
    });
    document.getElementById("msg").value = "";
}
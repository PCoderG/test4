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
  var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({

    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() 
{firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log(Room_names);
row = "	<div class='room_name' id='"+Room_names+"' onClick = redirectToRoomPage(this.id)>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML =+ row;
});});}
getData();
function redirectToRoomPage(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}
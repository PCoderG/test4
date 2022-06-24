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
console.log(firebase_message_id); console.log(message_data); name = message_data['name']; message = message_data['message']; like = message_data['like']; name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>"; message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; row = name_with_tag + message_with_tag +like_button + span_with_tag; document.getElementById("output").innerHTML += row;
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
function updateLike(message_id) {
console.log("Like is clicked" + message_id);
button_id    = message_id;
likes = document.getElementById(button_id).value;
updatedLikes = Number[likes] + 1;
console.log(updatedLikes);
firebase.database().ref(room_name).child(message).update({
    likes : updatedLikes
});
}

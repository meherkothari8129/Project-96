  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyADa6yO4PuR4IAKRRtFXNrwGDNJc1L6D5Y",
    authDomain: "chitchat-part2-d2869.firebaseapp.com",
    databaseURL: "https://chitchat-part2-d2869-default-rtdb.firebaseio.com",
    projectId: "chitchat-part2-d2869",
    storageBucket: "chitchat-part2-d2869.appspot.com",
    messagingSenderId: "549336528087",
    appId: "1:549336528087:web:7d6e92bb2d588cc09b2c92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name- " + Room_names);
 row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName()
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location = "index.html";
}
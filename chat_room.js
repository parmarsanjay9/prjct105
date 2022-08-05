const firebaseConfig = {
    apiKey: "AIzaSyCCpdqUFm-8woyLMm-tGGmoTSVtlRjP4SY",
    authDomain: "kwitter-c8095.firebaseapp.com",
    databaseURL: "https://kwitter-c8095-default-rtdb.firebaseio.com",
    projectId: "kwitter-c8095",
    storageBucket: "kwitter-c8095.appspot.com",
    messagingSenderId: "942900809084",
    appId: "1:942900809084:web:911d108f74b8f99dba28f9",
    measurementId: "G-6616DL3HE1"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   
user_name = document.getElementById("user_name").value;
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";



function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name" , room_name);

    window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room name -" + Room_names);
   row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;

//End code
   });});}

getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "chat_page.html";

}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
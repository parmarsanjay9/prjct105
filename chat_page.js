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

   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

   function send() 
   {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        massage:msg,
        like:0
    });

    document.getElementById("msg").value = "";
   }

   function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> " + name + "<img class= 'user_tick' src ='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_Button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'> ";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button>";

    row = name_with_tag + message_with_tag + like_Button + span_with_tag;
    document.getElementById("output").innerHTML += row;
   } }); }); }

   getData();

   function updateLike(message_id)
   {
    console.log("Clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) + 1;
    console.log(update_likes);

    firebase.database().ref(room_name).child(message_id).update({
        likes : update_likes
    });
   }

   function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
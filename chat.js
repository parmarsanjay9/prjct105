// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE 
var firebaseConfig = {
  apiKey: "AIzaSyBuHDoRar14zhsa-s40QLi64o_jPwZOGuA",
  authDomain: "let-s-chat-webapp-1e1d7.firebaseapp.com",
  databaseURL: "https://let-s-chat-webapp-1e1d7-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-webapp-1e1d7",
  storageBucket: "let-s-chat-webapp-1e1d7.appspot.com",
  messagingSenderId: "1024859415415",
  appId: "1:1024859415415:web:3145f8128a0c456d563772"
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




var firebaseConfig = {
    apiKey: "AIzaSyBgOlWn6Trw8zumRCrlByyIEFxiopAE1tE",
    authDomain: "kwitter-app-42393.firebaseapp.com",
    databaseURL: "https://kwitter-app-42393-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-42393",
    storageBucket: "kwitter-app-42393.appspot.com",
    messagingSenderId: "1001395057166",
    appId: "1:1001395057166:web:f2a25f3735ff54f695025f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("kwitter.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();

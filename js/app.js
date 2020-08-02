var firebaseConfig = {
    apiKey: "AIzaSyDfcu6Hl_ox9ilndt6ZT3SyT6qaFGCkLTQ",
    authDomain: "minimarket-masi-2020.firebaseapp.com",
    databaseURL: "https://minimarket-masi-2020.firebaseio.com",
    projectId: "minimarket-masi-2020",
    storageBucket: "minimarket-masi-2020.appspot.com",
    messagingSenderId: "626195316599",
    appId: "1:626195316599:web:21f909f0559987cad6ab72",
    measurementId: "G-CRXWW8B4Q7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.onload = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            document.getElementById('usuario').innerHTML = "Usuario registrado: " + email;
        } else {
            document.getElementById('estado').innerHTML = "No Logueado";
        }
    });
}

function salir() {
    firebase.auth().signOut().then(function () {
        window.location = "../index.html";
    }).catch(function (error) {
        alert(error);
    })
}
// =====================================
// RTP Firebase Login System
// =====================================


// Firebase Config Import

import { auth } from "../firebase/config.js";


// Firebase Authentication

import {

    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail

} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";





// Login Form

const loginForm = document.getElementById("loginForm");



if(loginForm){


loginForm.addEventListener("submit", async function(e){


    e.preventDefault();



    const email = document
    .getElementById("email")
    .value
    .trim();



    const password = document
    .getElementById("password")
    .value;




    try{


        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );



        alert("Login Successful ✅");



        localStorage.setItem(
            "loggedIn",
            "true"
        );



        window.location.href =
        "pages/dashboard.html";



    }


    catch(error){


        alert(error.message);



    }



});



}








// Google Login


const googleLoginBtn =
document.getElementById("googleLogin");



if(googleLoginBtn){



googleLoginBtn.addEventListener(
"click",
async function(){



try{


const provider =
new GoogleAuthProvider();



await signInWithPopup(
auth,
provider
);



alert(
"Google Login Successful ✅"
);



window.location.href =
"pages/dashboard.html";



}

catch(error){


alert(error.message);



}



});



}







// Forgot Password


const forgotPassword =
document.getElementById("forgotPassword");



if(forgotPassword){



forgotPassword.addEventListener(
"click",
async function(e){



e.preventDefault();



const email =
document
.getElementById("email")
.value
.trim();




if(!email){


alert(
"Enter your email first"
);


return;


}




try{


await sendPasswordResetEmail(
auth,
email
);



alert(
"Password reset email sent ✅"
);



}


catch(error){


alert(error.message);



}




});



}

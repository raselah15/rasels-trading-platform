import { auth } from "./firebase.js";

import {
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

document
.getElementById("loginForm")
.addEventListener("submit", async function(e){

    
});




const googleLoginBtn = document.getElementById("googleLogin");

if (googleLoginBtn) {

    googleLoginBtn.addEventListener("click", async () => {

        try {

            const provider = new GoogleAuthProvider();

            await signInWithPopup(auth, provider);

            alert("Google Login Successful!");

            window.location.href = "dashboard.html";

        } catch (err) {

        console.error(err);
alert(err.code + "\n" + err.message);
        }

    });

}




document
.getElementById("loginForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        const response = await fetch("http://localhost:3000/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })

        });

        const data = await response.json();

        if(data.success){

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            window.location.href = "dashboard.html";

        } else {

            alert(data.message);

        }

    } catch(error){

        console.log(error);

        alert("Backend server is not running");

    }

});



const forgotBtn = document.getElementById("forgotPassword");

if (forgotBtn) {

    forgotBtn.addEventListener("click", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value;

        if (!email) {

            alert("Please enter your email first.");

            return;

        }

        try {

            await sendPasswordResetEmail(auth, email);

            alert("Password reset email sent.");

        } catch (err) {

    console.error(err);

    alert(err.code + "\n" + err.message);

}

    });

}




// ================================
// Login Function (Added)
// ================================


document.addEventListener("DOMContentLoaded", function(){


    const loginBtn = document.querySelector("button");


    if(loginBtn){


        loginBtn.addEventListener("click", function(){



            const emailInput = document.querySelector(
                "input[type='email']"
            );


            const passwordInput = document.querySelector(
                "input[type='password']"
            );



            if(!emailInput || !passwordInput){

                console.log("Login fields not found");

                return;

            }



            const email = emailInput.value.trim();

            const password = passwordInput.value.trim();





            // Demo Login


            if(
                email === "admin@gmail.com" &&
                password === "123456"
            ){



                alert("Login Successful ✅");



                window.location.href =
                "pages/dashboard.html";



            }

            else{



                alert(
                    "Wrong Email or Password ❌"
                );



            }



        });


    }



});

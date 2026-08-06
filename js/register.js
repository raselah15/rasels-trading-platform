import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

document
.getElementById("registerForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        await updateProfile(userCredential.user, {
            displayName: name
        });

        alert("Account created successfully!");

        window.location.href = "dashboard.html";

    } catch (err) {

        console.error(err);

        alert(err.code + "\n" + err.message);

    }

});

const googleRegisterBtn =
document.getElementById("googleRegister");

if (googleRegisterBtn) {

    googleRegisterBtn.addEventListener(
        "click",
        async () => {

            try {

                const provider =
                    new GoogleAuthProvider();

                await signInWithPopup(
                    auth,
                    provider
                );

                alert("Google Sign Up Successful!");

                window.location.href =
                    "dashboard.html";

            } catch (err) {

                console.error(err);

                alert(err.code + "\n" + err.message);

            }

        }

    );

}




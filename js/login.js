document.addEventListener("DOMContentLoaded", function(){


    const loginForm = document.getElementById("loginForm");


    if(loginForm){


        loginForm.addEventListener("submit", function(e){


            e.preventDefault();


            const email = document.getElementById("email").value;

            const password = document.getElementById("password").value;



            if(
                email === "admin@gmail.com" &&
                password === "123456"
            ){


                alert("Login Successful ✅");


                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        email: email
                    })
                );


                window.location.href =
                "pages/dashboard.html";


            }

            else{


                alert("Wrong Email or Password ❌");


            }



        });


    }


});

const express = require("express");
const cors = require("cors");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Test API
app.get("/", (req, res) => {

    res.json({
        name: "RTP Platform",
        status: "running"
    });

});


// Login API
app.post("/login", (req, res) => {

    const { email, password } = req.body;


    if (
        email === "admin@raseltrading.com" &&
        password === "123456"
    ) {

        res.json({

            success: true,

            message: "Login successful",

            user: {

                id: 1,
                name: "Rasel Admin",
                email: email,
                role: "Admin"

            }

        });


    } else {


        res.json({

            success: false,

            message: "Invalid email or password"

        });


    }


});



// Dashboard API
app.get("/dashboard", (req, res) => {


    res.json({

        account: "RTP Futures Account",

        balance: 50000,

        profit: 3200,

        status: "Active"


    });


});



// Trading Accounts API
app.get("/accounts", (req, res)=>{


    res.json([

        {
            id:1,
            platform:"Lucid Trading",
            type:"Evaluation",
            balance:50000,
            status:"Active"
        },


        {
            id:2,
            platform:"AMP Futures",
            type:"Live",
            balance:25000,
            status:"Active"
        }


    ]);


});



// Server Start

app.listen(3000, ()=>{

    console.log("RTP Backend Server running on port 3000");

});

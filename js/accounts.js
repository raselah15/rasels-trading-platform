/* =====================================================
   RTP Accounts Module
   Version 1.0
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Accounts Module Loaded");

    // ================================
    // Load Accounts
    // ================================

    let accounts = JSON.parse(localStorage.getItem("rtpAccounts")) || [

        {
            broker:"Lucid",
            type:"Evaluation",
            balance:50000
        },

        {
            broker:"AMP Futures",
            type:"Live",
            balance:12500
        },

        {
            broker:"Exness",
            type:"Forex",
            balance:5000
        }

    ];

    // ================================
    // Save
    // ================================

    function saveAccounts(){

        localStorage.setItem(
            "rtpAccounts",
            JSON.stringify(accounts)
        );

    }

    // ================================
    // Add Account
    // ================================

    window.addAccount=function(){

        const broker=prompt("Broker Name");

        if(!broker) return;

        const type=prompt("Account Type");

        const balance=prompt("Balance");

        accounts.push({

            broker,

            type,

            balance

        });

        saveAccounts();

        alert("Account Added.");

        location.reload();

    };

    // ================================
    // Delete Account
    // ================================

    window.deleteAccount=function(index){

        if(confirm("Delete Account?")){

            accounts.splice(index,1);

            saveAccounts();

            location.reload();

        }

    };

    // ================================
    // Edit Account
    // ================================

    window.editAccount=function(index){

        const account=accounts[index];

        const broker=prompt("Broker",account.broker);

        const type=prompt("Type",account.type);

        const balance=prompt("Balance",account.balance);

        account.broker=broker;

        account.type=type;

        account.balance=balance;

        saveAccounts();

        alert("Updated");

        location.reload();

    };

    // ================================
    // Refresh
    // ================================

    window.refreshAccounts=function(){

        location.reload();

    };

    // ================================
    // Search
    // ================================

    const search=document.getElementById("accountSearch");

    if(search){

        search.addEventListener("keyup",()=>{

            console.log(search.value);

        });

    }

    // ================================
    // Total Balance
    // ================================

    let total=0;

    accounts.forEach(a=>{

        total+=Number(a.balance);

    });

    console.log("Total Balance:",total);

});


/* ==========================================
   STEP 17A
   Accounts Data Initialization
========================================== */

let accounts = JSON.parse(localStorage.getItem("rtpAccounts")) || [

    {
        broker: "Lucid",
        type: "Funded Account",
        balance: 50000
    },

    {
        broker: "Tradeify",
        type: "Evaluation Account",
        balance: 100000
    }

];

/* ==========================================
   Save Accounts
========================================== */

function saveAccounts() {

    localStorage.setItem(

        "rtpAccounts",

        JSON.stringify(accounts)

    );

}

/* ==========================================
   Load Accounts
========================================== */

function loadAccounts() {

    const data = localStorage.getItem("rtpAccounts");

    if (data) {

        accounts = JSON.parse(data);

    }

}

/* ==========================================
   Reset Accounts
========================================== */

function resetAccounts() {

    if (confirm("Reset all accounts?")) {

        localStorage.removeItem("rtpAccounts");

        location.reload();

    }

}

/* ==========================================
   Refresh Accounts
========================================== */

function refreshAccounts() {

    loadAccounts();

    if (typeof renderAccounts === "function") {

        renderAccounts();

    }

}

/* ==========================================
   Initialize
========================================== */

loadAccounts();

console.log("Accounts Module Initialized");




/* ==========================================
   STEP 17B
   Add / Edit / Delete Accounts
========================================== */

/* ---------- Add Account ---------- */

function addAccount() {

    const broker = prompt("Broker Name:");

    if (!broker) return;

    const type = prompt("Account Type:");

    if (!type) return;

    const balance = prompt("Starting Balance:");

    if (!balance || isNaN(balance)) {

        alert("Invalid Balance!");

        return;

    }

    accounts.push({

        broker: broker,

        type: type,

        balance: Number(balance)

    });

    saveAccounts();

    if (typeof renderAccounts === "function") {

        renderAccounts();

    }

    alert("✅ Account Added Successfully");

}

/* ---------- Edit Account ---------- */

function editAccount(index) {

    const account = accounts[index];

    if (!account) return;

    const broker = prompt(

        "Broker Name:",

        account.broker

    );

    if (broker === null) return;

    const type = prompt(

        "Account Type:",

        account.type

    );

    if (type === null) return;

    const balance = prompt(

        "Balance:",

        account.balance

    );

    if (balance === null || isNaN(balance)) return;

    account.broker = broker;

    account.type = type;

    account.balance = Number(balance);

    saveAccounts();

    if (typeof renderAccounts === "function") {

        renderAccounts();

    }

    alert("✏️ Account Updated");

}

/* ---------- Delete Account ---------- */

function deleteAccount(index) {

    if (!confirm("Delete this account?")) return;

    accounts.splice(index, 1);

    saveAccounts();

    if (typeof renderAccounts === "function") {

        renderAccounts();

    }

    alert("🗑 Account Deleted");

}

console.log("Account CRUD Functions Loaded");


/* ==========================================
   STEP 17C
   Render / Search / Statistics
========================================== */

/* ---------- Render Accounts ---------- */

function renderAccounts() {

    const grid = document.getElementById("accountGrid");

    if (!grid) return;

    grid.innerHTML = "";

    accounts.forEach((account, index) => {

        grid.innerHTML += `

        <div class="account-card">

            <h2>${account.broker}</h2>

            <p>${account.type}</p>

            <h3>$${account.balance.toLocaleString()}</h3>

            <div class="account-buttons">

                <button onclick="editAccount(${index})">

                    ✏️ Edit

                </button>

                <button onclick="deleteAccount(${index})">

                    🗑 Delete

                </button>

            </div>

        </div>

        `;

    });

    updateAccountSummary();

}

/* ---------- Search Accounts ---------- */

function searchAccounts() {

    const input = document
        .getElementById("searchAccount");

    if (!input) return;

    const keyword = input.value.toLowerCase();

    const cards = document.querySelectorAll(".account-card");

    cards.forEach(card => {

        card.style.display = card.innerText
            .toLowerCase()
            .includes(keyword)
            ? "block"
            : "none";

    });

}

/* ---------- Account Summary ---------- */

function updateAccountSummary() {

    const totalAccounts = document.getElementById("totalAccounts");

    const totalBalance = document.getElementById("totalBalance");

    if (totalAccounts) {

        totalAccounts.textContent = accounts.length;

    }

    if (totalBalance) {

        const sum = accounts.reduce(

            (total, account) => total + account.balance,

            0

        );

        totalBalance.textContent =

            "$" + sum.toLocaleString();

    }

}

/* ---------- Auto Render ---------- */

document.addEventListener("DOMContentLoaded", () => {

    renderAccounts();

});

console.log("Accounts Render Ready");







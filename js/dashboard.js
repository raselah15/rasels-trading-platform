/* ==========================================================
   RTP v1.0 Professional Dashboard
   JavaScript
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("RTP Dashboard Loaded");

    /* ==========================
       Sidebar Toggle
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");

    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            sidebar.classList.toggle("active");

        });

    }

    /* ==========================
       Live Clock
    ========================== */

    function updateClock(){

        const clock=document.getElementById("clock");

        if(!clock) return;

        const now=new Date();

        clock.innerHTML=now.toLocaleTimeString();

    }

    updateClock();

    setInterval(updateClock,1000);

    /* ==========================
       Market Status
    ========================== */

    function updateMarketStatus(){

        const market=document.getElementById("market-status");

        if(!market) return;

        const day=new Date().getDay();

        if(day===0 || day===6){

            market.innerHTML="🔴 Market Closed";

        }else{

            market.innerHTML="🟢 Market Open";

        }

    }

    updateMarketStatus();

    /* ==========================
       Theme Toggle
    ========================== */

    const themeBtn=document.getElementById("themeBtn");

    if(themeBtn){

        themeBtn.addEventListener("click",()=>{

            document.body.classList.toggle("light-mode");

        });

    }

    /* ==========================
       Search
    ========================== */

    const search=document.querySelector(".search input");

    if(search){

        search.addEventListener("keyup",()=>{

            console.log("Searching:",search.value);

        });

    }

    /* ==========================
       Quick Actions
    ========================== */

    const actionButtons=document.querySelectorAll(".quick-actions button");

    actionButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            alert(button.innerText);

        });

    });

    /* ==========================
       Welcome Message
    ========================== */

    const hour=new Date().getHours();

    if(hour<12){

        console.log("Good Morning Rasel");

    }else if(hour<18){

        console.log("Good Afternoon Rasel");

    }else{

        console.log("Good Evening Rasel");

    }

});




/* ==========================================
   RTP Dashboard JavaScript
   Version 1.0
========================================== */

// ==========================================
// Live Date & Time
// ==========================================

function updateDateTime() {

    const dateElement = document.getElementById("liveDate");
    const timeElement = document.getElementById("liveTime");

    const now = new Date();

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    if (dateElement) {
        dateElement.textContent =
            now.toLocaleDateString("en-US", dateOptions);
    }

    if (timeElement) {
        timeElement.textContent =
            now.toLocaleTimeString();
    }

}

setInterval(updateDateTime,1000);

updateDateTime();

// ==========================================
// Welcome Message
// ==========================================

function updateGreeting(){

    const greeting=document.getElementById("greeting");

    if(!greeting) return;

    const hour=new Date().getHours();

    if(hour<12){

        greeting.textContent="☀️ Good Morning";

    }

    else if(hour<18){

        greeting.textContent="🌤 Good Afternoon";

    }

    else{

        greeting.textContent="🌙 Good Evening";

    }

}

updateGreeting();

// ==========================================
// Market Status
// ==========================================

function updateMarketStatus(){

    const status=document.getElementById("marketStatus");

    if(!status) return;

    const hour=new Date().getHours();

    if(hour>=9 && hour<17){

        status.textContent="🟢 Market Open";

    }

    else{

        status.textContent="🔴 Market Closed";

    }

}

updateMarketStatus();

// ==========================================
// Notification
// ==========================================

function showNotification(message){

    alert(message);

}

// ==========================================
// Quick Actions
// ==========================================

function openTrading(){

    window.location.href="trading.html";

}

function openJournal(){

    window.location.href="journal.html";

}

function openAnalytics(){

    window.location.href="analytics.html";

}

function openAccounts(){

    window.location.href="accounts.html";

}

console.log("RTP Dashboard Loaded Successfully");



/* ==========================================
   Dashboard Counter Animation
========================================== */

function animateCounter(id, target, speed = 20) {

    const element = document.getElementById(id);

    if (!element) return;

    let count = 0;

    const timer = setInterval(() => {

        count += Math.ceil(target / 100);

        if (count >= target) {

            count = target;

            clearInterval(timer);

        }

        element.textContent = count.toLocaleString();

    }, speed);

}

/* ==========================================
   Theme Toggle
========================================== */

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const mode = document.body.classList.contains("light-mode")
        ? "light"
        : "dark";

    localStorage.setItem("rtpTheme", mode);

}

(function loadTheme() {

    const saved = localStorage.getItem("rtpTheme");

    if (saved === "light") {

        document.body.classList.add("light-mode");

    }

})();

/* ==========================================
   Toast Notification
========================================== */

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.remove();

    }, 3500);

}

/* ==========================================
   Save Last Visit
========================================== */

localStorage.setItem(

    "lastVisit",

    new Date().toLocaleString()

);

/* ==========================================
   Dashboard Loaded
========================================== */

window.addEventListener("load", () => {

    animateCounter("profitCounter", 18420);

    animateCounter("tradeCounter", 428);

    animateCounter("winCounter", 74);

    showToast("Welcome back to RTP Dashboard");

});

/* ==========================================
   Refresh Dashboard
========================================== */

function refreshDashboard() {

    location.reload();

}

/* ==========================================
   Console Message
========================================== */

console.log("Dashboard Interactive Features Loaded");




/* ==========================================
   Live Connection Status
========================================== */

function updateConnectionStatus() {

    const status = document.getElementById("connectionStatus");

    if (!status) return;

    if (navigator.onLine) {

        status.innerHTML = "🟢 Online";

        status.style.color = "#4CAF50";

    } else {

        status.innerHTML = "🔴 Offline";

        status.style.color = "#F44336";

    }

}

window.addEventListener("online", updateConnectionStatus);

window.addEventListener("offline", updateConnectionStatus);

updateConnectionStatus();

/* ==========================================
   Last Login
========================================== */

function showLastLogin() {

    const element = document.getElementById("lastLogin");

    if (!element) return;

    const last = localStorage.getItem("lastLogin");

    if (last) {

        element.innerHTML = last;

    } else {

        element.innerHTML = "First Login";

    }

    localStorage.setItem(

        "lastLogin",

        new Date().toLocaleString()

    );

}

showLastLogin();

/* ==========================================
   Demo Market Update
========================================== */

const marketMessages = [

    "GC Bullish Momentum",

    "NQ Testing Resistance",

    "ES Holding Support",

    "USD News Coming Soon",

    "Market Volatility Increasing"

];

function updateMarketMessage() {

    const element = document.getElementById("marketMessage");

    if (!element) return;

    const random = Math.floor(

        Math.random() * marketMessages.length

    );

    element.innerHTML = marketMessages[random];

}

updateMarketMessage();

setInterval(updateMarketMessage,15000);

/* ==========================================
   Auto Refresh Clock
========================================== */

setInterval(function(){

    console.log("Dashboard Running...");

},60000);

/* ==========================================
   Dashboard Initialization
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    console.log("================================");

    console.log("RTP Dashboard Ready");

    console.log("Version 1.0 Professional");

    console.log("================================");

    updateDateTime();

    updateGreeting();

    updateMarketStatus();

    updateConnectionStatus();

    showLastLogin();

});



/* ==========================================
   Navigation System
========================================== */

function goDashboard(){

    window.location.href="dashboard.html";

}

function goMarkets(){

    window.location.href="markets.html";

}

function goRoadmap(){

    window.location.href="market-roadmap.html";

}

function goTrading(){

    window.location.href="trading.html";

}

function goAccounts(){

    window.location.href="accounts.html";

}

function goJournal(){

    window.location.href="journal.html";

}

function goArchive(){

    window.location.href="archive.html";

}

function goAnalysis(){

    window.location.href="rtp-analysis.html";

}

function goAnalytics(){

    window.location.href="analytics.html";

}

function goSettings(){

    window.location.href="settings.html";

}


/* ==========================================
   RTP Quick Navigation
========================================== */

function openPage(page){

    window.location.href = page;

}

function openDashboard(){

    openPage("dashboard.html");

}

function openAccounts(){

    openPage("accounts.html");

}

function openTrading(){

    openPage("trading.html");

}

function openJournal(){

    openPage("journal.html");

}

function openArchive(){

    openPage("archive.html");

}

function openAnalytics(){

    openPage("analytics.html");

}

function openRoadmap(){

    openPage("market-roadmap.html");

}

function openAnalysis(){

    openPage("rtp-analysis.html");

}

function openSettings(){

    openPage("settings.html");

}


/* ==========================================
   STEP 16C
   Auto Navigation
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuLinks = document.querySelectorAll(".menu a");

    if (menuLinks.length === 0) return;

    menuLinks.forEach(link => {

        link.addEventListener("click", function () {

            console.log("Opening:", this.getAttribute("href"));

        });

    });

});

/* ==========================================
   Active Menu Highlight
========================================== */

(function () {

    const currentPage = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll(".menu a");

    links.forEach(link => {

        const parent = link.parentElement;

        parent.classList.remove("active");

        if (link.getAttribute("href") === currentPage) {

            parent.classList.add("active");

        }

    });

})();

/* ==========================================
   Navigation Ready
========================================== */

console.log("Navigation System Ready");


/* ==========================================
   STEP 21B
   Quick Navigation Functions
========================================== */

function openDashboard(){

    window.location.href="dashboard.html";

}

function openAccounts(){

    window.location.href="accounts.html";

}

function openTrading(){

    window.location.href="trading.html";

}

function openJournal(){

    window.location.href="journal.html";

}

function openArchive(){

    window.location.href="archive.html";

}

function openAnalytics(){

    window.location.href="analytics.html";

}

function openAnalysis(){

    window.location.href="rtp-analysis.html";

}

function openRoadmap(){

    window.location.href="market-roadmap.html";

}

function openSettings(){

    window.location.href="settings.html";

}

console.log("STEP 21B Navigation Loaded");



/* ==========================================
   STEP 22B
   Active Sidebar
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    const current=window.location.pathname.split("/").pop();

    document.querySelectorAll(".menu a").forEach(link=>{

        if(link.getAttribute("href")===current){

            link.parentElement.classList.add("active");

        }

    });

});



function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString("en-CA", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const date = now.toLocaleDateString("en-CA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    document.getElementById("currentTime").textContent = time;
    document.getElementById("currentDate").textContent = date;
}

updateClock();

setInterval(updateClock, 1000);

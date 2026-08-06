/* ==========================================
   STEP 18A
   Trading Module Initialization
========================================== */

let trades = JSON.parse(localStorage.getItem("rtpTrades")) || [];

/* ==========================================
   Save Trades
========================================== */

function saveTrades() {

    localStorage.setItem(

        "rtpTrades",

        JSON.stringify(trades)

    );

}

/* ==========================================
   Load Trades
========================================== */

function loadTrades() {

    const data = localStorage.getItem("rtpTrades");

    if (data) {

        trades = JSON.parse(data);

    }

}

/* ==========================================
   Reset Trades
========================================== */

function resetTrades() {

    if (!confirm("Reset all trades?")) return;

    localStorage.removeItem("rtpTrades");

    trades = [];

    if (typeof renderTrades === "function") {

        renderTrades();

    }

}

/* ==========================================
   Refresh Trades
========================================== */

function refreshTrades() {

    loadTrades();

    if (typeof renderTrades === "function") {

        renderTrades();

    }

}

/* ==========================================
   Initialize
========================================== */

loadTrades();

console.log("Trading Module Initialized");



/* ==========================================
   STEP 18B
   Add / Edit / Delete Trades
========================================== */

/* ---------- Add Trade ---------- */

function addTrade() {

    const symbol = prompt("Symbol (GC, NQ, ES, etc):");

    if (!symbol) return;

    const side = prompt("Buy or Sell?");

    if (!side) return;

    const entry = parseFloat(prompt("Entry Price:"));

    if (isNaN(entry)) {

        alert("Invalid Entry Price");

        return;

    }

    const exit = parseFloat(prompt("Exit Price:"));

    if (isNaN(exit)) {

        alert("Invalid Exit Price");

        return;

    }

    const quantity = parseFloat(prompt("Quantity:"));

    if (isNaN(quantity)) {

        alert("Invalid Quantity");

        return;

    }

    const pnl = (exit - entry) * quantity;

    trades.push({

        symbol,

        side,

        entry,

        exit,

        quantity,

        pnl

    });

    saveTrades();

    if (typeof renderTrades === "function") {

        renderTrades();

    }

    alert("✅ Trade Added Successfully");

}

/* ---------- Edit Trade ---------- */

function editTrade(index) {

    const trade = trades[index];

    if (!trade) return;

    const symbol = prompt("Symbol:", trade.symbol);

    if (symbol === null) return;

    const side = prompt("Buy or Sell:", trade.side);

    if (side === null) return;

    const entry = parseFloat(prompt("Entry Price:", trade.entry));

    if (isNaN(entry)) return;

    const exit = parseFloat(prompt("Exit Price:", trade.exit));

    if (isNaN(exit)) return;

    const quantity = parseFloat(prompt("Quantity:", trade.quantity));

    if (isNaN(quantity)) return;

    trade.symbol = symbol;

    trade.side = side;

    trade.entry = entry;

    trade.exit = exit;

    trade.quantity = quantity;

    trade.pnl = (exit - entry) * quantity;

    saveTrades();

    if (typeof renderTrades === "function") {

        renderTrades();

    }

    alert("✏️ Trade Updated");

}

/* ---------- Delete Trade ---------- */

function deleteTrade(index) {

    if (!confirm("Delete this trade?")) return;

    trades.splice(index, 1);

    saveTrades();

    if (typeof renderTrades === "function") {

        renderTrades();

    }

    alert("🗑 Trade Deleted");

}

console.log("Trading CRUD Functions Loaded");


/* ==========================================
   STEP 18C
   Render / Search / Statistics
========================================== */

/* ---------- Render Trades ---------- */

function renderTrades() {

    const table = document.getElementById("tradeTable");

    if (!table) return;

    table.innerHTML = "";

    trades.forEach((trade, index) => {

        table.innerHTML += `

        <tr>

            <td>${trade.symbol}</td>

            <td>${trade.side}</td>

            <td>${trade.entry}</td>

            <td>${trade.exit}</td>

            <td>${trade.quantity}</td>

            <td>$${trade.pnl.toFixed(2)}</td>

            <td>

                <button onclick="editTrade(${index})">

                    ✏️

                </button>

                <button onclick="deleteTrade(${index})">

                    🗑

                </button>

            </td>

        </tr>

        `;

    });

    updateTradeSummary();

}

/* ---------- Search Trades ---------- */

function searchTrades() {

    const input = document.getElementById("searchTrade");

    if (!input) return;

    const keyword = input.value.toLowerCase();

    const rows = document.querySelectorAll("#tradeTable tr");

    rows.forEach(row => {

        row.style.display = row.innerText
            .toLowerCase()
            .includes(keyword)
            ? ""
            : "none";

    });

}

/* ---------- Trade Summary ---------- */

function updateTradeSummary() {

    const totalTrades = document.getElementById("totalTrades");

    const totalPnL = document.getElementById("totalPnL");

    if (totalTrades) {

        totalTrades.textContent = trades.length;

    }

    if (totalPnL) {

        const pnl = trades.reduce(

            (sum, trade) => sum + trade.pnl,

            0

        );

        totalPnL.textContent =

            "$" + pnl.toFixed(2);

    }

}

/* ---------- Auto Render ---------- */

document.addEventListener("DOMContentLoaded", () => {

    renderTrades();

});

console.log("Trading Module Ready");

/* ==========================================
   STEP 19A
   Journal Module Initialization
========================================== */

let journals = JSON.parse(localStorage.getItem("rtpJournal")) || [];

/* ---------- Save ---------- */

function saveJournal() {

    localStorage.setItem(

        "rtpJournal",

        JSON.stringify(journals)

    );

}

/* ---------- Load ---------- */

function loadJournal() {

    const data = localStorage.getItem("rtpJournal");

    if (data) {

        journals = JSON.parse(data);

    }

}

/* ---------- Refresh ---------- */

function refreshJournal() {

    loadJournal();

    if (typeof renderJournal === "function") {

        renderJournal();

    }

}

/* ---------- Reset ---------- */

function resetJournal() {

    if (!confirm("Delete all journal entries?")) return;

    localStorage.removeItem("rtpJournal");

    journals = [];

    if (typeof renderJournal === "function") {

        renderJournal();

    }

}

loadJournal();

console.log("Journal Module Initialized");


/* ==========================================
   STEP 19B
   Add / Edit / Delete Journal
========================================== */

/* ---------- Add Journal ---------- */

function addJournal() {

    const title = prompt("Journal Title:");

    if (!title) return;

    const market = prompt("Market (GC, NQ, ES, etc):");

    if (!market) return;

    const result = prompt("Result (Win / Loss / BE):");

    if (!result) return;

    const notes = prompt("Trade Notes:");

    journals.push({

        date: new Date().toLocaleDateString(),

        title,

        market,

        result,

        notes

    });

    saveJournal();

    if (typeof renderJournal === "function") {

        renderJournal();

    }

    alert("✅ Journal Added Successfully");

}

/* ---------- Edit Journal ---------- */

function editJournal(index) {

    const journal = journals[index];

    if (!journal) return;

    const title = prompt(

        "Journal Title:",

        journal.title

    );

    if (title === null) return;

    const market = prompt(

        "Market:",

        journal.market

    );

    if (market === null) return;

    const result = prompt(

        "Result:",

        journal.result

    );

    if (result === null) return;

    const notes = prompt(

        "Notes:",

        journal.notes

    );

    if (notes === null) return;

    journal.title = title;

    journal.market = market;

    journal.result = result;

    journal.notes = notes;

    saveJournal();

    if (typeof renderJournal === "function") {

        renderJournal();

    }

    alert("✏️ Journal Updated");

}

/* ---------- Delete Journal ---------- */

function deleteJournal(index) {

    if (!confirm("Delete this journal?")) return;

    journals.splice(index, 1);

    saveJournal();

    if (typeof renderJournal === "function") {

        renderJournal();

    }

    alert("🗑 Journal Deleted");

}

console.log("Journal CRUD Functions Loaded");



/* ==========================================
   STEP 19C
   Render / Search / Statistics
========================================== */

/* ---------- Render Journal ---------- */

function renderJournal() {

    const list = document.getElementById("journalList");

    if (!list) return;

    list.innerHTML = "";

    journals.forEach((journal, index) => {

        list.innerHTML += `

        <div class="journal-card">

            <h3>${journal.title}</h3>

            <p><strong>Date:</strong> ${journal.date}</p>

            <p><strong>Market:</strong> ${journal.market}</p>

            <p><strong>Result:</strong> ${journal.result}</p>

            <p>${journal.notes}</p>

            <div class="journal-actions">

                <button onclick="editJournal(${index})">

                    ✏️ Edit

                </button>

                <button onclick="deleteJournal(${index})">

                    🗑 Delete

                </button>

            </div>

        </div>

        `;

    });

    updateJournalSummary();

}

/* ---------- Search ---------- */

function searchJournal() {

    const input = document.getElementById("searchJournal");

    if (!input) return;

    const keyword = input.value.toLowerCase();

    const cards = document.querySelectorAll(".journal-card");

    cards.forEach(card => {

        card.style.display = card.innerText
            .toLowerCase()
            .includes(keyword)
            ? "block"
            : "none";

    });

}

/* ---------- Summary ---------- */

function updateJournalSummary() {

    const total = document.getElementById("totalJournal");

    if (total) {

        total.textContent = journals.length;

    }

}

/* ---------- Auto Render ---------- */

document.addEventListener("DOMContentLoaded", () => {

    renderJournal();

});

console.log("Journal Module Ready");



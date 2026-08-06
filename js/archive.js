/* ==========================================
   STEP 20A
   Archive Module Initialization
========================================== */

let archives = JSON.parse(localStorage.getItem("rtpArchives")) || [];

/* ---------- Save ---------- */

function saveArchives() {

    localStorage.setItem(

        "rtpArchives",

        JSON.stringify(archives)

    );

}

/* ---------- Load ---------- */

function loadArchives() {

    const data = localStorage.getItem("rtpArchives");

    if (data) {

        archives = JSON.parse(data);

    }

}

/* ---------- Refresh ---------- */

function refreshArchives() {

    loadArchives();

    if (typeof renderArchives === "function") {

        renderArchives();

    }

}

/* ---------- Reset ---------- */

function resetArchives() {

    if (!confirm("Delete all archive items?")) return;

    localStorage.removeItem("rtpArchives");

    archives = [];

    if (typeof renderArchives === "function") {

        renderArchives();

    }

}

loadArchives();

console.log("Archive Module Initialized");

/* ==========================================
   STEP 20B
   Add / Edit / Delete Archive
========================================== */

/* ---------- Add Archive ---------- */

function addArchive() {

    const title = prompt("Archive Title:");

    if (!title) return;

    const market = prompt("Market (GC, NQ, ES, etc):");

    if (!market) return;

    const result = prompt("Trade Result (Win / Loss / BE):");

    if (!result) return;

    const notes = prompt("Archive Notes:");

    archives.push({

        date: new Date().toLocaleDateString(),

        title,

        market,

        result,

        notes

    });

    saveArchives();

    if (typeof renderArchives === "function") {

        renderArchives();

    }

    alert("✅ Archive Added Successfully");

}

/* ---------- Edit Archive ---------- */

function editArchive(index) {

    const archive = archives[index];

    if (!archive) return;

    const title = prompt(

        "Archive Title:",

        archive.title

    );

    if (title === null) return;

    const market = prompt(

        "Market:",

        archive.market

    );

    if (market === null) return;

    const result = prompt(

        "Trade Result:",

        archive.result

    );

    if (result === null) return;

    const notes = prompt(

        "Notes:",

        archive.notes

    );

    if (notes === null) return;

    archive.title = title;

    archive.market = market;

    archive.result = result;

    archive.notes = notes;

    saveArchives();

    if (typeof renderArchives === "function") {

        renderArchives();

    }

    alert("✏️ Archive Updated");

}

/* ---------- Delete Archive ---------- */

function deleteArchive(index) {

    if (!confirm("Delete this archive?")) return;

    archives.splice(index, 1);

    saveArchives();

    if (typeof renderArchives === "function") {

        renderArchives();

    }

    alert("🗑 Archive Deleted");

}

console.log("Archive CRUD Functions Loaded");


/* ==========================================
   STEP 20C
   Render / Search / Statistics
========================================== */

/* ---------- Render Archive ---------- */

function renderArchives() {

    const list = document.getElementById("archiveList");

    if (!list) return;

    list.innerHTML = "";

    archives.forEach((archive, index) => {

        list.innerHTML += `

        <div class="archive-card">

            <h3>${archive.title}</h3>

            <p><strong>Date:</strong> ${archive.date}</p>

            <p><strong>Market:</strong> ${archive.market}</p>

            <p><strong>Result:</strong> ${archive.result}</p>

            <p>${archive.notes}</p>

            <div class="archive-actions">

                <button onclick="editArchive(${index})">

                    ✏️ Edit

                </button>

                <button onclick="deleteArchive(${index})">

                    🗑 Delete

                </button>

            </div>

        </div>

        `;

    });

    updateArchiveSummary();

}

/* ---------- Search Archive ---------- */

function searchArchives() {

    const input = document.getElementById("searchArchive");

    if (!input) return;

    const keyword = input.value.toLowerCase();

    const cards = document.querySelectorAll(".archive-card");

    cards.forEach(card => {

        card.style.display = card.innerText
            .toLowerCase()
            .includes(keyword)
            ? "block"
            : "none";

    });

}

/* ---------- Archive Summary ---------- */

function updateArchiveSummary() {

    const total = document.getElementById("totalArchives");

    if (!total) return;

    total.textContent = archives.length;

}

/* ---------- Auto Render ---------- */

document.addEventListener("DOMContentLoaded", () => {

    renderArchives();

});

console.log("Archive Module Ready");



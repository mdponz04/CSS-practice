// JavaScript for managing pagination
const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // Example list items
const itemsPerPage = 10;
const listContainer = document.getElementById("item-list");
const paginationContainer = document.getElementById("pagination");

function displayItems(page) {
    listContainer.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = items.slice(start, end);

    pageItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        listContainer.appendChild(li);
    });
}

function setupPagination() {
    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(items.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        if (i === 1) button.classList.add("active");
        button.addEventListener("click", () => {
            document
                .querySelectorAll(".pagination button")
                .forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            displayItems(i);
        });
        paginationContainer.appendChild(button);
    }
}

// Initialize
window.onload = () => {
    displayItems(1);
    setupPagination();
};

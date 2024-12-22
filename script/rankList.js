const weekTab = document.getElementById("weekTab");
const monthTab = document.getElementById("monthTab");
const allTab = document.getElementById("allTab");
const trendingList = document.getElementById("trendingList");

const data = {
    week: [
        "Trending Item 1 (Week)",
        "Trending Item 2 (Week)",
        "Trending Item 3 (Week)",
        "Trending Item 4 (Week)",
        "Trending Item 5 (Week)",
    ],
    month: [
        "Trending Item 1 (Month)",
        "Trending Item 2 (Month)",
        "Trending Item 3 (Month)",
        "Trending Item 4 (Month)",
        "Trending Item 5 (Month)",
    ],
    all: [
        "Trending Item 1 (All)",
        "Trending Item 2 (All)",
        "Trending Item 3 (All)",
        "Trending Item 4 (All)",
        "Trending Item 5 (All)",
    ],
};

function updateList(type) {
    trendingList.innerHTML = "";
    data[type].forEach((item) => {
        const listItem = document.createElement("li");
        listItem.className = "list-item";
        listItem.textContent = item;
        trendingList.appendChild(listItem);
    });
}

function activateTab(tab) {
    document
        .querySelectorAll(".tab")
        .forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
}

weekTab.addEventListener("click", () => {
    activateTab(weekTab);
    updateList("week");
});

monthTab.addEventListener("click", () => {
    activateTab(monthTab);
    updateList("month");
});

allTab.addEventListener("click", () => {
    activateTab(allTab);
    updateList("all");
});

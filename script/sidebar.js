// JavaScript for managing sidebar
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const closeSidebar = document.getElementById("close-sidebar");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

const sidebar = document.querySelector(".sidebar_menu");
const sidebarBtnOpen = document.querySelector('.sidebar_btn-open');
const sidebarBtnClose = document.querySelector('.sidebar_btn-close');
const sidebarLinksContainer = document.querySelector(".sidebar_nav-item ul");

sidebarBtnOpen.addEventListener('click', () => {
    sidebar.classList.add("sidebar_menu_active");
});

sidebarBtnClose.addEventListener('click', () => {
    sidebar.classList.remove("sidebar_menu_active");
});

sidebarLinksContainer.addEventListener('click', (event) => {
    if (event.target.tagName === "A") {
        sidebar.classList.remove("sidebar_menu_active");
    }
});
const sidebar = document.querySelector(".sidebar_menu");
const sidebarBtnOpen = document.querySelector('.sidebar_btn-open');
const sidebarBtnClose = document.querySelector('.sidebar_btn-close');

sidebarBtnOpen.addEventListener('click', () => {
    sidebar.classList.add("sidebar_menu_active");
    sidebarBtn.classList.add('sidebar_btn-close');
});

sidebarBtnClose.addEventListener('click', () => {
    sidebar.classList.remove("sidebar_menu_active");
    sidebarBtn.classList.remove('sidebar_btn-close');
});
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".masked-input");
const searchInput = document.querySelector(".search-box input");

searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle("active");
    searchInput.value = "";
    searchInput.focus();
});

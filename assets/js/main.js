const uniteToast = new bootstrap.Toast('.toast');
const button = document.querySelector("uniteToastBtn");

uniteToastBtn.addEventListener("click", (event) => {
    uniteToast.show();
});

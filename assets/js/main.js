const uniteToast = new bootstrap.Toast('.toast');
const uniteToastBtn = document.querySelector('#uniteToastBtn');

const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

uniteToastBtn.addEventListener('click', (event) => {
    uniteToast.show();
    jsConfetti.addConfetti();
});


const uniteToast = new bootstrap.Toast('.toast');
const uniteToastBtn = document.querySelector('#uniteToastBtn');

const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

uniteToastBtn.addEventListener('click', (event) => {
    uniteToast.show();
    jsConfetti.addConfetti();
});



let myBackToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBackToTopBtn.style.display = "block";
  } else {
    myBackToTopBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

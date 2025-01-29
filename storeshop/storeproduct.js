document.addEventListener("DOMContentLoaded", function() {
    var heartIcons = document.querySelectorAll(".card__icon");
    var likedCount = document.getElementById("likedCount");
    var likedProducts = []; // Array to store liked product IDs

    // Loop through all heart icons in product cards
    heartIcons.forEach(function(heartIcon) {
        heartIcon.addEventListener("click", function() {
            // Toggle like status
            var isLiked = heartIcon.classList.toggle('liked');

            // Get the product ID (you can replace this with your own logic)
            var productId = heartIcon.dataset.productId;

            // Update liked products array
            if (isLiked) {
                likedProducts.push(productId);
                heartIcon.innerHTML = '<i class="fas fa-heart"></i>';
            } else {
                var index = likedProducts.indexOf(productId);
                if (index !== -1) {
                    likedProducts.splice(index, 1);
                    heartIcon.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';

                }
            }

            // Update liked count
            likedCount.textContent = likedProducts.length;

            // Prevent default action of anchor tag
            event.preventDefault();
        });
    });
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});
//code pour panier 
document.addEventListener('DOMContentLoaded', function () {
    let counter = 0;
    const heartIcons = document.querySelectorAll('.card__icon ion-icon[name="heart-outline"]');
    const headerCounter = document.getElementById('header-counter-value');
    const dropdownCounter = document.getElementById('dropdown-counter-value');

    heartIcons.forEach(icon => {
      icon.addEventListener('click', function (e) {
        e.preventDefault();
        counter++;
        headerCounter.textContent = counter;
        dropdownCounter.textContent = counter;
      });
    });
  });
//code de lv//
const loginSection = document.getElementById('login-section');
const signupSection = document.getElementById('signup-section');
const showLogin = document.getElementById('show-login');
const showSignup = document.getElementById('show-signup');

showLogin.addEventListener('click', (event) => {
  event.preventDefault();
  signupSection.style.display = 'none';
  loginSection.style.display = 'block';

  setTimeout(() => {
    signupSection.style.opacity = 0;
    loginSection.style.opacity = 1;
  }, 10);
});

showSignup.addEventListener('click', (event) => {
  event.preventDefault();
  loginSection.style.display = 'none';
  signupSection.style.display = 'block';

  setTimeout(() => {
    loginSection.style.opacity = 0;
    signupSection.style.opacity = 1;
  }, 10);
});

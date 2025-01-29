const hamburger_menu = document.querySelector("#ham-menu");
const container = document.querySelector("#my-container");

hamburger_menu.addEventListener("click", () => {
container.classList.toggle("active");
});


//SERVICES
$('#carousel1').owlCarousel({
  loop:false,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:false,
          loop:false
      }
  }
})

//IMAGE DE BACKGROUND

$(document).ready(function(){
  $("#btn-home").hover(function(){
      $('#header1').css({
        "background":"url('images/modern-space-with-charcoal-accent-wall-sleek-lighting-wooden-ceiling.jpg') no-repeat center / cover",
        "transition": "background 0.5s ease-in-out, transform 0.5s ease-in-out" 
      })
      $('.title2').text("La simplicité, poussé à l'extrême, devient élégance.");
  })

  $("#btn-store").hover(function(){
      $('#header1').css({
        "background":"url('images/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative.jpg') no-repeat center / cover",
      })
      $('.title2').text("Des meubles fins, un savoir-faire exquis.");
  })

  $("#btn-services").hover(function(){
      $('#header1').css({
        "background":"url('images/white-chair-sits-front-black-wall-with-mountains-it.jpg') no-repeat center / cover",
        
      })
      $('.title2').text("La qualité à prix abordable – c’est ce que nous offrons !");
  })


  $("#btn-about").hover(function(){
      $('#header1').css({
        "background":"url('images/retro-living-room-interior-design.jpg') no-repeat center / cover",
      })
      $('.title2').text("Notre sélection de meubles de qualité ravira vos sens.");
  })


  $("#btn-contact").hover(function(){
    $('#header1').css({
      "background":"url('images/view-contemporary-photorealistic-lamp.jpg') no-repeat center / cover",
    })
    $('.title2').text("La sérénité à travers l’ameublement !");
  })

})

$(document).ready(function(){

    $('#itemslider').carousel({ interval: 3000 });
    
    $('.carousel-showmanymoveone .item').each(function(){
        var itemToClone = $(this);
    
        for (var i=1;i<6;i++) {
            itemToClone = itemToClone.next();
    
            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }
    
            itemToClone.children(':first-child').clone()
            .addClass("cloneditem-"+(i))
            .appendTo($(this));
        }                                           
    });

    
});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
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
document.addEventListener("DOMContentLoaded", function() {
    var heartIcon = document.getElementById("heartIcon");
    var isLiked = false;
    
    heartIcon.addEventListener("click", function() {
        // Check the current state and toggle
        if (isLiked) {
            // If already liked, change back to outline heart
            heartIcon.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
            isLiked = false;
        } else {
            // If not liked, change to solid heart
            heartIcon.innerHTML = '<i class="fas fa-heart"></i>';
            isLiked = true;
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez l'icône du panier et le nombre d'articles
    var cartIcon = document.querySelector(".fa.fa-shopping-bag");
    var cartCount = document.querySelector(".bag .num");
    
    // Variable pour suivre l'état du cœur (cliqué ou non)
    var heartClicked = false;
    
    // Sélectionnez l'icône du cœur
    var heartIcon = document.querySelector("#heartIcon");
    
    // Sélectionnez le menu déroulant du panier
    var dropdownMenu = document.querySelector(".dropdown-menu.dropdown-cart");
    
    // Écouteur d'événements pour le menu déroulant du panier
    dropdownMenu.addEventListener("click", function(event) {
        // Vérifiez si l'élément cliqué est un bouton d'ajout au panier
        if (event.target.classList.contains("btn-danger")) {
            // Mettez à jour le nombre d'articles dans le panier
            updateCartCount(1); // Vous pouvez ajuster le nombre d'articles ajoutés
        }
    });

    // Écouteur d'événements pour le cœur
    heartIcon.addEventListener("click", function(event) {
        // Si le cœur est déjà cliqué, diminue le nombre d'articles dans le panier
        if (heartClicked) {
            updateCartCount(-1);
            heartClicked = false; // Réinitialise l'état du cœur
        } else {
            // Sinon, incrémente le nombre d'articles dans le panier
            updateCartCount(1); // Vous pouvez ajuster le nombre d'articles ajoutés
            heartClicked = true; // Met à jour l'état du cœur
        }
    });

    // Fonction pour mettre à jour le nombre d'articles dans le panier
    function updateCartCount(quantity) {
        // Obtenez le nombre actuel d'articles dans le panier
        var currentCount = parseInt(cartCount.innerText);
        
        // Si la quantité est négative et le nombre actuel est de 0, ne faites rien
        if (quantity < 0 && currentCount === 0) {
            return;
        }
        
        // Ajoutez la nouvelle quantité
        var newCount = currentCount + quantity;
        
        // Assurez-vous que le nombre d'articles ne devienne pas négatif
        if (newCount < 0) {
            newCount = 0;
        }
        
        // Mettez à jour l'affichage du nombre d'articles dans le panier
        cartCount.innerText = newCount;
    }
});
     function updateCartCount(quantity) {

        var currentCount = parseInt(cartCount.innerText);
        if (quantity < 0 && currentCount === 0){
            return;
        }
        if (newCount < 0){
            newCount = 0;
        }   
        cartCount.innerText =newCount;
    
    }


        
   





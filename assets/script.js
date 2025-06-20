// Slider

let currentIndex = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000);

// Function for adding products to Wishlist 

function addToWishlist(button){
    button.textContent = "Added!";
    button.disabled = true;
    button.style.backgroundColor = "gray";
    alert("Product added to wishlist!");
}

// Function for adding products to Basket 

function addToBasket(button){
    button.textContent = "Added!";
    button.disabled = true;
    button.style.backgroundColor = "gray";
    alert("Product added to basket!");
}
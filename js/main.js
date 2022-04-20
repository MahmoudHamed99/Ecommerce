// Start Navbar
let navLinks = document.querySelector("nav .links"),
    links = document.querySelectorAll("nav .links li a"),
    openTab = document.querySelector("nav .bars"),
    closeTab = document.querySelector("nav .links li .close");
    cart = document.querySelector("nav .cart");

openTab.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
closeTab.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
cart.onclick = function () {
    window.location.href = "cart.html";
}
// Start Navbar

// Start Products
let products = document.querySelectorAll(".products .product");
products.forEach(product => {
    product.onclick = function () {
        window.location.href = "product.html";
    }
});
// End Products

// Start Product-Images
let mainImg = document.querySelector(".product-img > img"),
    otherImgs = document.querySelectorAll(".product-img ul li img");

otherImgs.forEach(img => {
    img.onclick = function () {
        otherImgs.forEach(ximg => {
            ximg.parentElement.classList.remove("active");
        })
        img.parentElement.classList.add("active");
        mainImg.src = img.src;
    }
});
// End Product-Images
const searchForm = document.querySelector('.search-form');
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');

// Add event listener to search form submit
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent page from refreshing
  const searchInput = event.target.querySelector('input[type="text"]');
  const searchQuery = searchInput.value;
  // Use searchQuery to search for products in your database or API
  console.log(`Search for "${searchQuery}"`);
  searchInput.value = ''; // clear input field
});

// Add event listener to cart icon click
cartIcon.addEventListener('click', () => {
  // Show cart modal or redirect to cart page
  console.log('Open cart');
});

// Example code to update cart count (replace with your own code)
let cartCountValue = 0;
cartCount.textContent = cartCountValue;







const buttons = document.querySelectorAll(".details-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const productDetails = button.nextElementSibling;
    productDetails.classList.toggle("hidden");
  });
});










// Get all the product items on the page
const productItems = document.querySelectorAll('.product-item');

// Loop through each product item and add a click event listener to the details button
productItems.forEach(productItem => {
  const detailsBtn = productItem.querySelector('.details-btn');
  const productDetails = productItem.querySelector('.product-details');
  
  detailsBtn.addEventListener('click', () => {
    // Toggle the hidden class on the product details div to show or hide it
    productDetails.classList.toggle('hidden');
  });
});





















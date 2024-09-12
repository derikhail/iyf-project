// You can add JavaScript here for functionalities like:
// - Adding items to cart
// - Updating cart count
// - Handling product details

// Example: Adding to cart button click event
const addToCartButtons = document.querySelectorAll('.product button');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Code to handle adding item to cart
    console.log('Add to cart button clicked');
  });
});

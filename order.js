// Initialize total price
var totalPrice = 0;

// Function to add item to cart
function addToCart(event) {
    if (event.target.classList.contains('order-button')) {
        var bookTitle = event.target.parentNode.querySelector('h2').textContent.replace('Book Title: ', '');
        var price = parseFloat(event.target.parentNode.querySelector('p:nth-child(3)').textContent.replace('Price: $', ''));
        
        // Create a new list item for the cart
        var cartItem = document.createElement("li");
        cartItem.textContent = bookTitle + " - $" + price;
        
        // Add the item to the cart list
        var cartList = document.getElementById("cart-list");
        cartList.appendChild(cartItem);
    
        // Update total price
        totalPrice += price;
        updateTotal();
    }
}

// Function to update total price
function updateTotal() {
    // Update total display
    document.getElementById("total-price").textContent = "$" + totalPrice.toFixed(2);
}

// Attach click event listener to the document body
document.body.addEventListener('click', addToCart);

// Attach click event listener to the confirm button
let confirmButton = document.getElementById("confirm");
confirmButton.addEventListener("click", () => {
    alert("Thanks for your purchase. Your total amount is $" + totalPrice.toFixed(2));
    
});

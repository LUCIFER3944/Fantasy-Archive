// Function to add item to cart
function addToCart(bookTitle, price) {
    // Create a new list item for the cart
    var cartItem = document.createElement("li");
    cartItem.textContent = bookTitle + " - $" + price;
    
    // Add the item to the cart list
    var cartList = document.getElementById("cart-list");
    cartList.appendChild(cartItem);

    // Calculate total price and update total display
    updateTotal(price);
}

// Function to update total price
function updateTotal(price) {
    // Get current total price
    var totalPrice = parseFloat(document.getElementById("total-price").textContent.replace("$", ""));
    
    // Update total price
    totalPrice += price;
    document.getElementById("total-price").textContent = "$" + totalPrice.toFixed(2);
}

function addToCart(bookTitle, price) {

    var cartItem = document.createElement("li");
    cartItem.textContent = bookTitle + " - $" + price;
    
   
    var cartList = document.getElementById("cart-list");
    cartList.appendChild(cartItem);
}
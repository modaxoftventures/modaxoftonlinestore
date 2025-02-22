// cart.js
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length; // Or sum of quantities if needed
}

function loadCart() {  // If you need to load cart items on other pages too
    // ... (your existing loadCart() function code)
    updateCartCount(); // Call this here as well if needed
}

// Call updateCartCount initially to set the badge on page load
updateCartCount();

// Make the functions globally accessible (if needed for other scripts)
window.updateCartCount = updateCartCount;
window.loadCart = loadCart;

// ... any other cart-related functions you want to be reusable
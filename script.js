
// ---------------- LOGIN ----------------
function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter Email and Password");
    } else {
        alert("Login Successful!");
        window.location.href = "menu.html";
    }
}

function register(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Fill all fields");
        return;
    }

    alert("Registration Successful")
    window.location.href = "login.html";

}
// ---------------- ADD TO CART ----------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");

}

function logout() {
    alert("Logged out!");
}
function proceedToPurchase() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("🛒 Your cart is empty!");
        return;
    }

    // Go to payment page
    window.location.href = "payment.html";
}


// ---------------- PAYMENT ----------------
function payment(event) {
    event.preventDefault();

    alert("Payment Successful!");
    window.location.href = "order-success.html";
}
// Logic to fill the total amount automatically when the page loads
document.addEventListener("DOMContentLoaded", function () {
    // 1. Fetch cart items from LocalStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // 2. Calculate the grand total price
    let total = 0;
    cart.forEach(item => {
        // Convert the price string to a number and add it up
        total += Number(item.price); 
    });

    // 3. Find the totalAmount input box on the payment.html page
    let totalAmountInput = document.getElementById("totalAmount");
    
    // 4. If the input box exists, inject the calculated price
    if (totalAmountInput) {
        if (total > 0) {
            totalAmountInput.value = "₹" + total; // If items exist, show total
        } else {
            totalAmountInput.value = "₹0"; // If cart is empty, show ₹0
        }
    }
});

// ---------------- LOGOUT ----------------
function logout() {

    let confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        alert("Logged Out Successfully");
        window.location.href = "login.html";
    }
}









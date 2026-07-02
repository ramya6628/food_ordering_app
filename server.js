const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// HTML form data read பண்ண
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Home Page -> Register
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});

// Register Page
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});

// Login Page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

// Menu Page
app.get("/menu", (req, res) => {
    res.sendFile(path.join(__dirname, "menu.html"));
});

// Cart Page
app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "cart.html"));
});

// Payment Page
app.get("/payment", (req, res) => {
    res.sendFile(path.join(__dirname, "payment.html"));
});

// Order Success Page
app.get("/success", (req, res) => {
    res.sendFile(path.join(__dirname, "order-success.html"));
});

// Server Start
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
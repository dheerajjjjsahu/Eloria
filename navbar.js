fetch("./navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        document.getElementById("home").onclick = () => location.href = "Home.html";
        document.getElementById("aboutus").onclick = () => location.href = "About.html";
        document.getElementById("contact").onclick = () => location.href = "ContactUS.html";
        document.getElementById("explore").onclick = () => location.href = "Explore.html";

        document.getElementById("logout").onclick = () => {
            localStorage.removeItem("loggedInUser");
            alert("Logged out");
            location.href = "index.html";
        };

        document.getElementById("menuBtn").onclick = () => {
            document.getElementById("menu").classList.toggle("hidden");
        };

        updateCartUI();
    });

function updateCartUI() {
    const userId = localStorage.getItem("loggedInUser");
    const cart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    const el = document.getElementById("cartCount");
    if (el) el.innerText = cart.length;
}

function gotocart() {
    location.href = "Cart.html";
}
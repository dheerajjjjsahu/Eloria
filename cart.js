document.addEventListener("DOMContentLoaded", () => {

    const userId = "user_101";
    const cartKey = `cart_${userId}`;

    const cartItemsDiv = document.getElementById("cartItems");
    const emptyCart = document.getElementById("emptyCart");

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    renderCart();

    function renderCart() {
        cartItemsDiv.innerHTML = "";

        if (cart.length === 0) {
            emptyCart.classList.remove("hidden");
            localStorage.setItem("cartCount", 0);
            return;
        }

        emptyCart.classList.add("hidden");

        cart.forEach((item, index) => {
            const div = document.createElement("div");
            div.className =
                "flex items-center gap-4 bg-white p-4 rounded shadow mb-3";

            div.innerHTML = `
                <img src="${item.image}" class="w-20 h-20 object-cover rounded"/>
                <div class="flex-1">
                    <p class="font-semibold">${item.title}</p>
                </div>
                <button 
                    class="bg-red-500 text-white px-3 py-1 rounded text-sm"
                    onclick="removeFromCart(${index})">
                    Remove
                </button>
            `;

            cartItemsDiv.appendChild(div);
        });

        localStorage.setItem("cartCount", cart.length);
    }

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        localStorage.setItem(cartKey, JSON.stringify(cart));
        renderCart();
    };
});
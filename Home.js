async function apifetch() {
    let response = await fetch("./api.json");
    let users = await response.json();

    window.allProducts = users;

    let mainDiv = document.getElementById("mainDiv");
    mainDiv.className =
        "mt-20 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6 p-8 bg-[#0F0F12]";

    mainDiv.innerHTML = "";

    users.forEach(user => {
        let card = document.createElement("div");
        card.className =
            "bg-[#1A1A1F] rounded-2xl border border-[#2A2A32] shadow-lg hover:shadow-[0_0_0_1px_#C9A86A] transition-all duration-300 p-4 flex flex-col";

        card.innerHTML = `
            <h3 class="text-[#F5F5F5] text-lg font-semibold  mb-3">
               ${user.title}
            </h3>

            <img src="${user.image}" 
                 alt="${user.title}" 
                 class="w-full h-60 object-cover transition-transform  rounded-lg duration-700 ease-[cubic-bezier(0.4,0,0.2,1) hover:scale-105"/>

            <p class="text-lg font-semibold text-[#C9A86A] mb-4">
                $${user.price}
            </p>

            <button 
                onclick="countincrement(${user.id})"
                class="mt-auto bg-[#E6C58F] text-[#111111] font-semibold  py-2 rounded-xl hover:bg-[#C9A86A] transition-all duration-300 hover:scale-[1.03]">
                Add To Cart
            </button>
        `;

        mainDiv.appendChild(card);
    });
}

apifetch();

function countincrement(productId) {
    const userId = "user_101";
    const cartKey = `cart_${userId}`;

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const product = window.allProducts.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    localStorage.setItem(cartKey, JSON.stringify(cart));

    const cartEl = document.getElementById("cartCount");
    if (cartEl) cartEl.innerText = cart.length;
}
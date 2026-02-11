function login1() {
    window.location.href = "Login.html";
}

function signup1() {
    window.location.href = "Signup.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector("#carouselExampleIndicators");
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 3000,
            ride: "carousel",
            pause: false,
            wrap: true
        });
    }
});
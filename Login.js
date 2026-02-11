    // document.addEventListener("DOMContentLoaded", () => {
    //     const form = document.getElementById("loginForm");

    //     form.addEventListener("submit", (e) => {
    //         e.preventDefault();

    //         const email = document.getElementById("email").value.trim().toLowerCase();
    //         const pass = document.getElementById("pass").value.trim();

    //         const users = JSON.parse(localStorage.getItem("users")) || [];

    //         const user = users.find(u => u.email === email && u.pass === pass);

    //         if (!user) {
    //             alert("Invalid email or password!");
    //             return;
    //         }

    //         localStorage.setItem("loggedInUser", JSON.stringify(user));

    //         alert("Login successful!...");
    //         window.location.href = "Home.html";
    //     });
    // });
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Login.js loaded");

        const form = document.getElementById("loginForm");
        if (!form) {
            console.error("Form not found in Login.html");
            return;
        }

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const email = document.getElementById("email").value.trim().toLowerCase();
            const pass = document.getElementById("pass").value.trim();

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(u => u.email === email && u.pass === pass);

            if (user) {
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                alert("Login successful!");
                window.location.href = "Home.html";
            } else {
                alert("Invalid email or password!");
            }
        });
    });
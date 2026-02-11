// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("signupForm");

//     form.addEventListener("submit", function(e) {
//         e.preventDefault();

//         const userName = document.getElementById("username").value.trim();
//         const email = document.getElementById("email").value.trim().toLowerCase();
//         const pass = document.getElementById("pass").value.trim();
//         const confirmpass = document.getElementById("confirmpass").value.trim();
//         const gender = document.getElementById("gender").value;

//         if (!userName || !email || !pass || !confirmpass || !gender) {
//             alert("Please fill all details");
//             return;
//         }

//         if (pass !== confirmpass) {
//             alert("Passwords do not match!");
//             return;
//         }

//         let users = JSON.parse(localStorage.getItem("users")) || [];

//         const userExists = users.some(user => user.email === email);
//         if (userExists) {
//             alert("User with this email already exists!");
//             return;
//         }

//         const newUser = { userName, email, pass, gender };
//         users.push(newUser);
//         localStorage.setItem("users", JSON.stringify(users));

//         alert("Signup successful! Redirecting to Login...");
//         window.location.href = "Login.html";
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    console.log("Signup.js loaded");

    const form = document.getElementById("signupForm");
    if (!form) {
        console.error("Form not found");
        return;
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim().toLowerCase();
        const pass = document.getElementById("pass").value.trim();

        if (!email || !pass) {
            alert("Fill all fields!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some(u => u.email === email)) {
            alert("Email already taken!");
            return;
        }

        users.push({ email, pass });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup done! Login now.");
        window.location.href = "Login.html";
    });
});
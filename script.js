document.addEventListener("DOMContentLoaded", function () {

    // Contact Form

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        document.getElementById("success-msg").innerHTML =
            "✅ Message Sent Successfully!";

        document.getElementById("success-msg").style.color = "green";
        document.getElementById("success-msg").style.fontWeight = "bold";
        document.getElementById("success-msg").style.textAlign = "center";

        form.reset();
    });

    // Dark Mode Toggle

    const toggleBtn = document.getElementById("theme-toggle");

    toggleBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.innerHTML = "☀️";
        } else {
            toggleBtn.innerHTML = "🌙";
        }

    });

});

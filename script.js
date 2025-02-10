document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your submission! We will review your proposal.");
        this.reset();
    });

    let elements = document.querySelectorAll(".animated-text");
    elements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.animation = `fadeInUp 1s ease-in-out ${index * 0.2}s forwards`;
    });
});

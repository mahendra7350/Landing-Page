// Smooth scrolling function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for reaching out! We'll get back to you soon.");
        form.reset();
    });
});

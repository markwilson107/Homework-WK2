// Checks if ABOUT is clicked
$(".about-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to about me element
    $('html, body').animate({
        scrollTop: $(".aboutme-container").offset().top-56
    }, 1000);
})
// Checks if ARROW is clicked
$(".arrow").on("click", (event) => {
    event.preventDefault();
    // scrolls to about me element
    $('html, body').animate({
        scrollTop: $(".aboutme-container").offset().top-56
    }, 1000);
})
// Checks if PORTFOLIO is clicked
$(".portfolio-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to portfolio element
    $('html, body').animate({
        scrollTop: $(".portfolio-container").offset().top-56
    }, 1000);
})
// Checks if CONTACT is clicked
$(".contact-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to contact element
    $('html, body').animate({
        scrollTop: $(".contact-form").offset().top-56
    }, 1000);
})
// Checks if MARK WILSON is clicked
$(".navbar-brand").on("click", (event) => {
    event.preventDefault();
    // scrolls to top of page
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})
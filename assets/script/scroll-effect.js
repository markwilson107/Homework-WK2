// Sets variables
let navTarget = $('.nav-fader');
let navBrandTarget = $('.navbar-brand');
let scrollPercent = ((100 - window.scrollY) / 100);
let mobileMenuINT = 0;

// When document is ready
$(document).ready(() => {
    // makes all .fader elements hidden
    $(".fader").css('opacity', 0);
})

// Check if window is scrolling
$(window).scroll(() => {
    // gets current window scroll position
    let currentScroll = window.pageYOffset;
    // Fades in all .fader elements
    $(".fader").each(function () {
        const objCheckpoint = $(this).offset().top - 400;
        // checks if object checkpoint is reached
        if (currentScroll <= objCheckpoint) {
            // increases opacity
            $(this).css('opacity', 0 + currentScroll / objCheckpoint);
        } else {
            // sets opacity to solid
            $(this).css('opacity', 1);

        }
    });

    // Gets the percent the page has scrolled
    scrollPercent = ((100 - currentScroll) / 100);

    // Hide scroll arrow on scroll
    if (scrollPercent >= 0) {
        $(".arrow").css('opacity', 0 + scrollPercent);
    } else {
        $(".arrow").css('opacity', 0);
    }
    // deactivates arrow when window not at top
    if (scrollPercent > 0) {
        $(".arrow").css('visibility', 'visible');
    }
    else {
        $(".arrow").css('visibility', 'hidden');
    }

    // Hide navbar on scroll
    if ($(".navbar-toggler").hasClass("collapsed")) {
        if (scrollPercent >= 0) {
            navTarget.css('background-color', `rgb(0,0,0,${1 - scrollPercent})`);
            navBrandTarget.css('opacity', 1 - scrollPercent);
        }
        else {
            navTarget.css('background-color', `rgb(0,0,00,1)`);
            navBrandTarget.css('opacity', 1);
        }
    }
    else {
        navTarget.css('background-color', `rgb(0,0,0,1)`);
    }

}).scroll(); //invoke scroll-handler on page-load

// Makes navbar visible when nav menu is opened
$(".navbar-toggler").on("click", () => {
    clearInterval(mobileMenuINT);
    if ($(".navbar-toggler").hasClass("collapsed")) {
        navTarget.css('background-color', `rgb(0,0,0,1)`);
    }
    else {
        // attempt to make hiding of nav menu smoother
        mobileMenuINT = setInterval(() => {
            navTarget.css('background-color', `rgb(0,0,0,${1 - scrollPercent})`);
        }, 300);
    }
})
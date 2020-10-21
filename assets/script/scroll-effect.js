let navTarget = $('.nav-fader');
let navBrandTarget = $('.navbar-brand');
let scrollPercent = ((100 - window.scrollY) / 100);


let mobileMenuINT = 0;
$(document).ready(() => {
    $(".fader").css('opacity', 0);
})
$(window).scroll(() => {
    let currentScroll = window.pageYOffset ;
    // Fades in all .fader element 
    $(".fader").each(function () {
        
        const objMiddle = $(this).offset().top - 300;
        if (currentScroll <= objMiddle) {
            $(this).css('opacity', 0 + currentScroll / objMiddle);
        } else {
            $(this).css('opacity', 1);

        }
    });

    scrollPercent = ((100 - currentScroll) / 100);
    // Hide scroll arrow on scroll
    $(".arrow").css('opacity', 0 + scrollPercent);
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

$(".navbar-toggler").on("click", () => {
    clearInterval(mobileMenuINT);
    if ($(".navbar-toggler").hasClass("collapsed")) {
        navTarget.css('background-color', `rgb(0,0,0,1)`);
    }
    else {
        mobileMenuINT = setInterval(() => {
            navTarget.css('background-color', `rgb(0,0,0,${1 - scrollPercent})`);
        }, 300);
    }
})
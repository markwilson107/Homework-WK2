var navTarget = $('.nav-custom-home');
//var targetHeight = target.outerHeight();
var scrollPercent = ((100 - window.scrollY) / 100);

let mobileMenuINT = 0;

$(window).scroll(() => {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()/2;
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });

    scrollPercent = ((100 - window.scrollY) / 100);
    if ($(".navbar-toggler").hasClass("collapsed")) {
        if (scrollPercent >= 0) {
            navTarget.css('background-color', `rgb(0,0,0,${1 - scrollPercent})`);
        }
        else {
            navTarget.css('background-color', `rgb(0,0,00,1)`);
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
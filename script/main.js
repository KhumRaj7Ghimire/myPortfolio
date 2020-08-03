// Init Scrollspy
$('body').scrollspy({ target: '#main-nav' });
$('#year').text(new Date().getFullYear());

// NAVBAR TRANSSPARENT TO SOLID
$(document).ready(function () {
  AOS.init();
  // Get the current year for the copyright
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
  $(window).scroll(function () {
    $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250);
  });

  // Close Mobile Nav On Click
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $('.navbar-collapse').hasClass('show');
    if (_opened === true && !clickover.hasClass('navbar-toggler')) {
      $('.navbar-toggler').click();
    }
  });

  // OWL_CAROUSEL
  $('.project-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  $('.reference-area .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    // responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      1024: {
        items: 3,
      },
    },
  });
});

// $(document).ready(function () {
//   $('.card')
//     .delay(1800)
//     .queue(function (next) {
//       $(this).removeClass('hover');
//       $('a.hover').removeClass('hover');
//       next();
//     });
// });

// $(document).ready(function () {
//   AOS.init({
//     // uncomment below for on-scroll animations to played only once
//     // once: true
//   }); // initialize animate on scroll library
// });

// // Smooth scroll for links with hashes
// $('#main-nav a').click(function (event) {
//   // On-page links
//   if (
//     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
//     location.hostname == this.hostname
//   ) {
//     // Figure out element to scroll to
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     // Does a scroll target exist?
//     if (target.length) {
//       // Only prevent default if animation is actually gonna happen
//       event.preventDefault();
//       $('html, body').animate(
//         {
//           scrollTop: target.offset().top,
//         },
//         1000,
//         function () {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(':focus')) {
//             // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           }
//         }
//       );
//     }
//   }
// });

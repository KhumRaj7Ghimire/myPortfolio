// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Init Scrollspy
$('body').scrollspy({ target: '#main-nav' });

// // Smooth Scrolling
// $('#main-nav a').on('click', function (event) {
//   if (this.hash !== '') {
//     event.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       800,
//       function () {
//         window.location.hash = hash;
//       }
//     );
//   }
// });

// NAVBAR TRANSSPARENT TO SOLID
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});

// Arrow Down Bounce
$(document).ready(function () {
  $(window).scroll(function () {
    $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250);
  });
});

// Close Mobile Nav On Click
$(document).ready(function () {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $('.navbar-collapse').hasClass('show');
    if (_opened === true && !clickover.hasClass('navbar-toggler')) {
      $('.navbar-toggler').click();
    }
  });
});

// Typed Cursor Animation
// function typeAnimation() {
//   Typed.new('#writing-text', {
//     strings: [
//       'am a Full-Stack Web Developer.',
//       'love everything about code.',
//       'also teach programming to people.',
//       'solve problems.',
//     ],
//     // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
//     stringsElement: null,
//     // typing speed
//     typeSpeed: 1,
//     contentType: 'text',
//     callback: function () {
//       $('#writing-text').css({ color: '#fff', 'background-color': '#C8412B' });
//     },
//     preStringTyped: function () {},
//     onStringTyped: function () {},
//   });
// }

// Owl Carousel

$(document).ready(function () {
  $('.site-main .project-area .owl-carousel').owlCarousel({
    // loop: true,
    // autoplay: true,
    // dots: true,
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   544: {
    //     items: 2,
    //   },
    // },
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
});

$(document).ready(function () {
  $('.card')
    .delay(1800)
    .queue(function (next) {
      $(this).removeClass('hover');
      $('a.hover').removeClass('hover');
      next();
    });
});

$(document).ready(function () {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library
});

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

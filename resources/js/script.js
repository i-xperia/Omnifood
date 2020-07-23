$(document).ready(function(){

  $('.js--scroll-to-plans').click(function (){
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500)
  })

  $('.js--scroll-to-start').click(function (){
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
  })

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  //Mobile NAV

  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
   
    nav.slideToggle(200);

  });



});

window.onscroll = function() {myFunction()};

var navbar = document.querySelector('nav');

var sticky = navbar.offsetTop + 420;

function myFunction() {
  console.log(window.pageYOffset)
  //console.log(sticky)
  if(window.pageYOffset < 380) {
    navbar.classList.remove("sticky");
    
  }

  else if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    
  }
}
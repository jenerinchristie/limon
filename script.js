$(document).ready(function() {
  var stickyNavTop = $('nav').offset().top;
  var about = $('#about').offset().top;
  var portfolio = $('#portfolio').offset().top;
  var contact = $('#contact').offset().top;
  
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
      
    if (scrollTop > stickyNavTop) { 
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky'); 
    }
    
    if (scrollTop >= about - 1) {
      $('nav').addClass('darkcyan-bg')
    } else {
      $('nav').removeClass('darkcyan-bg')
    }
    if (scrollTop >= portfolio - 1) {
      $('nav').removeClass('darkcyan-bg')
      $('nav').addClass('grey-bg')
    } else {
      $('nav').removeClass('grey-bg')
    }
    if (scrollTop >= contact - 1) {
      $('nav').removeClass('grey-bg')
      $('nav').addClass('violet-bg')
    } else {
      $('nav').removeClass('violet-bg')
    }      
  };
 
  stickyNav();
 
  $(window).scroll(function() {
    stickyNav();
  });
});

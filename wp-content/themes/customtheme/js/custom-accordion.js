jQuery(function($){

  $(function(){
    if(window.location.hash) {
      var hash = window.location.hash;
      if ($('.acc-topic' + hash).length) {
        $('.acc-topic' + hash).toggleClass('active').siblings('.acc-details').slideToggle();
        $('html, body').animate({
          scrollTop: $('.acc-topic' + hash).offset().top
        }, 800);
      } else {
        $('.acc-topic').first().toggleClass('active').siblings('.acc-details').slideToggle(); 
      }
    } else {
      $('.acc-topic').first().toggleClass('active').siblings('.acc-details').slideToggle();
    }
  });

  $('.acc-topic').click(function(){
    $(this).toggleClass('active').siblings('.acc-details').slideToggle();
  });
  
});
jQuery(function($){

  var d;
  var k;
  var half = 0;

  $(function(){
    var w = $('.home-top').width();
    var vw = $(window).width();
    var h = $(window).height();
    if (vw <= 750) {
      half = 1;
      h = h/2;
      $('.home-blocks').css('visibility','visible');
    }
    $('.home-top').css('height', h+'px');
    d = w*w + h*h;
    d = Math.ceil(Math.sqrt(d));
    k = d / 10;
    var left = (d-w) * -0.5;
    var top = (d-h) * -0.5;
    $('.home-intro-circle-1, .home-intro-circle-2, .home-intro-image').css({
      'width': d+'px',
      'height': d+'px',
      'left': left+'px',
      'top': top+'px',
    });
  });

  $(window).resize(function(){
    var w = $('.home-top').width();
    var vw = $(window).width();
    var h = $(window).height();
    if (vw <= 750) { h = h/2; }
    $('.home-top').css('height', h+'px');
    d = w*w + h*h;
    d = Math.ceil(Math.sqrt(d));
    k = d / 10;
    var left = (d-w) * -0.5;
    var top = (d-h) * -0.5;
    $('.home-intro-circle-1, .home-intro-circle-2, .home-intro-image').css({
      'width': d+'px',
      'height': d+'px',
      'left': left+'px',
      'top': top+'px',
    });
  });

  $('.home-intro-2').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
    $('.home-intro-circle-1, .home-intro-circle-2, .home-intro-image').addClass('active').css({'transform': 'scale(1)'});
    $('.home-blocks').css('visibility','visible');
    homeSlider();
  });
    

  $('.home-link-parent').click(function(){
    $(this).toggleClass('active');
    $(this).siblings('.home-link-children').slideToggle();
  });

  function homeSlider() {
    $('.home-intro-image').css('background-color', 'white');
    var max = $('.home-intro-image-inner').length - 1;
    var index = 0;
    setInterval(function() {
      $('.home-intro-image-inner').eq(index).fadeOut(1000);
      if (index == max) { index = 0; } else { index++; }
      $('.home-intro-image-inner').eq(index).fadeIn(1000);
    }, 3000);
  }

  function contentEqualHeight() {
    // var winw = $(window).width();
    $('.home-link-single, .home-link-parent, .home-block').height('auto');
    // if (winw >= 992) {
      var i = 0;
      $('.home-link-single, .home-link-parent').each(function(){
        if ($(this).height() > i) { i = $(this).height(); }
      });
      $('.home-link-single, .home-link-parent').height(i);

      $('.home-block-row').each(function(){
        var r = 0;
        $(this).find('.home-block').each(function(){
          if ($(this).height() > r) { r = $(this).height(); }
        });
        $(this).find('.home-block').css('min-height', r + 'px');
      });
    // }
    $('.home-link-single, .home-link-parent, .home-block').css('visibility','visible');
  }

});
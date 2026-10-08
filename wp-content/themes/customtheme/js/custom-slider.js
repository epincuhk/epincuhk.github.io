jQuery(function($){

  var slider, slider0, slider2, slider3;
  
	$(function(){

    slider = $('.slider').bxSlider({
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      mode: 'fade',
      auto: true,
      pause: 5000,
      speed: 1000,
      controls: true,
      pager: false,
      hideControlOnEnd: false,
      infiniteLoop: true,
      prevText: '',
      nextText: '',
      onSliderLoad: function(currentIndex){
        $('.slider').css('visibility','visible');
      }
    });

    if ($('.slider-0').length) {
  		slider0 = $('.slider-0').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        mode: 'fade',
        auto: true,
        pause: 4000,
        speed: 1000,
        controls: true,
        pager: false,
        hideControlOnEnd: false,
        infiniteLoop: true,
        prevText: '',
        nextText: '',
        onSliderLoad: function(currentIndex){
          $('.slider-0').css('visibility','visible');
        }
      });
    }

    // longer duration
    if ($('.slider-2').length) {
      slider2 = $('.slider-2').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        mode: 'fade',
        auto: true,
        pause: 6000,
        speed: 1000,
        controls: true,
        pager: false,
        hideControlOnEnd: false,
        infiniteLoop: true,
        prevText: '',
        nextText: '',
        onSliderLoad: function(currentIndex){
          $('.slider-2').css('visibility','visible');
        }
      });
    }

    // carousel
    if ($('.slider-3').length) {
      slider3 = $('.slider-3').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 100000,
        mode: 'horizontal',
        auto: true,
        pause: 5000,
        speed: 1000,
        controls: true,
        pager: false,
        hideControlOnEnd: true,
        infiniteLoop: false,
        prevText: '',
        nextText: '',
        onSliderLoad: function(currentIndex){
          $('.slider-3').css('visibility','visible');
        }
      });
    }

  });


  $(window).resize(function(){

    slider.reloadSlider({
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      mode: 'fade',
      auto: true,
      pause: 5000,
      speed: 1000,
      controls: true,
      pager: false,
      hideControlOnEnd: false,
      infiniteLoop: true,
      prevText: '',
      nextText: '',
      onSliderLoad: function(currentIndex){
        $('.slider').css('visibility','visible');
      }
    });

    if ($('.slider-0').length) {
      slider0.reloadSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        mode: 'fade',
        auto: true,
        pause: 4000,
        speed: 1000,
        controls: true,
        pager: false,
        hideControlOnEnd: false,
        infiniteLoop: true,
        prevText: '',
        nextText: '',
        onSliderLoad: function(currentIndex){
          $('.slider-0').css('visibility','visible');
        }
      });
    }

    if ($('.slider-2').length) {
      slider2.reloadSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        mode: 'fade',
        auto: true,
        pause: 6000,
        speed: 1000,
        controls: true,
        pager: false,
        hideControlOnEnd: false,
        infiniteLoop: true,
        prevText: '',
        nextText: '',
        onSliderLoad: function(currentIndex){
          $('.slider-2').css('visibility','visible');
        }
      });
    }

  });

});
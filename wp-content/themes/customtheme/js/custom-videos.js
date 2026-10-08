jQuery(function($){

  var video_sliders = new Array();
  var num = 3;
  
  function sliderCheck() {
    var width = $(window).width()
    //$('.video-slider-container').height(0);
    if ( width > 750 ) { num = 3; }
    else if ( width > 500 ) { num = 2; }
    else { num = 1; }
  }

	$(function(){

    sliderCheck(); 
    
    $('.video-slider').each(function(){
      $s = $(this);
      video_slider = $s.bxSlider({
        minSlides: num,
        maxSlides: num,
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
          $s.css('visibility','visible');
        }
      });
      video_sliders.push(video_slider);
    });

  });

  $(window).resize(function(){

    sliderCheck();

    $.each(video_sliders, function(index, video_slider) {
      video_slider.reloadSlider({
        minSlides: num,
        maxSlides: num,
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
          $('.video-slider').css('visibility','visible');
        }
      });
    });

  });

});
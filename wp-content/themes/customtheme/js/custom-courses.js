jQuery(function($){

  $(document).ready(function(){
  	contentEqualHeight();
  });

  $(window).resize(function(){
  	contentEqualHeight();
  });

  $.fn.setHeight = function(setCount) {
    for(var i = 0; i < this.length; i+=setCount) {
      var curSet = this.slice(i, i+setCount), 
          height = 0;
      curSet.each(function() { height = Math.max(height, $(this).height()); })
            .css('height', height);
    }
    return this;
  };

  function contentEqualHeight() {
    winw = $(window).width();
    $('.course-text, .course-small-text').css('height','auto');
    //if (winw > 600) {
      $('.course-text').setHeight(3);
      $('.course-small-text').setHeight(4);
    //}
    /*
    k = 0;
    $('.hm-text h3').height('auto');
    $('.hm-text h3').each(function(){
      if ($(this).height() > k) { k = $(this).height(); }
    });
    $('.hm-text h3').height(k);
    j = 0;
    $('.hm-text p').height('auto');
    $('.hm-text p').each(function(){
      if ($(this).height() > j) { j = $(this).height(); }
    });
    $('.hm-text p').height(j);
    */
  }

  
});
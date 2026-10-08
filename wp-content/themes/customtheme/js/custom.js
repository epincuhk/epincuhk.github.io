jQuery(function($){

  $(function(){

    // check font size
    if ( localStorage.fontsize == null ) { localStorage.fontsize = "medium"; }
    var fontsize = localStorage.fontsize; 
    $('.fontsize-switch.' + fontsize).addClass('active').siblings().removeClass('active');
    $('body').removeClass("small medium large").addClass(fontsize);

    // new window for external links & PDF
    $('a').each(function() {
      if( this.hostname.length && location.hostname !== this.hostname ) {
        $(this).attr('target', '_blank');
      }
    });
    $('a[href$=".pdf"], a[href$=".jpg"], a[href$=".png"], a[href$=".docx"], a[href$=".doc"], a[href$=".xlsx"], a[href$=".xls"], a[href$=".pptx"], a[href$=".ppt"]').attr('target', '_blank');

    // Change language order on language switcher
    $('.widget-language-switcher-desktop .lang-en').prependTo('.widget-language-switcher-desktop .language-chooser');
    $('.widget-language-switcher-mobile .lang-en').prependTo('.widget-language-switcher-mobile .language-chooser');
    $('.language-switcher').css('opacity','1');

    $('.page-id-2674 .content table').each(function(){
      $(this).wrap('<div class="table-container"></div>');
    });

  });

  // font size switcher
  $('.fontsize-switch').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    var fontsize = $(this).data('size');
    localStorage.fontsize = fontsize;
    $('body').removeClass('small medium large').addClass(fontsize);
  });

  $('.main-menu li a').click(function(e){
    if ($(this).attr('href') == '#' || $(this).attr('href') == '') {
      e.preventDefault();
      $(this).parent('li').toggleClass('active');
    }
  });

  $('.main-menu-button, .main-menu-mask, .main-menu-close, .header-mask').click(function(){
    if ( $('body').hasClass('menu-open') ){
      $('body').removeClass('menu-open').addClass('menu-close');
    } else {
      $('body').addClass('menu-open').removeClass('menu-close');
    }
  });
  
});
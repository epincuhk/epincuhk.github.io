jQuery(function($){

  var result = '';
  var check0 = 0;
  var check1 = 0;
  var check2 = 0;
  var check3 = 0;
  var check4 = 0;
  var check5 = {};
  var error = 0;
  var msg = '<p>Your course selection does not fulfill the following requirement(s):</p><ul>';
  var check_total = parseInt($('.sc-total-content span').text());

  $(function(){

    $('.selected-course[data-area="required-course"], .selected-course[data-area="required-courses"]').each(function(){
      check0 += parseInt($(this).attr('data-unit'));
    });

    $('.selected-course[data-area="mindset-and-value"]').each(function(){
      check1 += parseInt($(this).attr('data-unit'));
    });

    $('.selected-course[data-area="knowledge-and-skills"]').each(function(){
      check2 += parseInt($(this).attr('data-unit'));
    });

    $('.selected-course[data-area="practice"]').each(function(){
      check3 += parseInt($(this).attr('data-unit'));
    });

    $('.selected-course[data-level="3000"]').each(function(){
      check4 += parseInt($(this).attr('data-unit'));
    });
    $('.selected-course[data-level="4000"]').each(function(){
      check4 += parseInt($(this).attr('data-unit'));
    });

    $('.selected-course').each(function(){
      d = $(this).attr('data-dept').toLowerCase();
      u = parseInt(($(this).attr('data-unit')));
      if (d in check5) {
        check5[d] = check5[d] + u;
      } else {
        check5[d] = u;
      }
    });


    // check mutually exclusive courses

    if ($('.selected-course[data-code="EPIN2010"]').length && $('.selected-course[data-code="MGNT2070"]').length) {
      error = 1;
      msg += '<li>Please select either EPIN2010 or MGNT2070</li>';
    }

    if ($('.selected-course[data-code="EPIN1020"]').length && $('.selected-course[data-code="MGNT1070"]').length) {
      error = 1;
      msg += '<li>Please select either EPIN1020 or MGNT1070</li>';
    }

    if ($('.selected-course[data-code="EPIN1030"]').length && $('.selected-course[data-code="SOSC1002"]').length) {
      error = 1;
      msg += '<li>Please select either EPIN1030 or SOCS1002</li>';
    }

    var s_count = 0;
    if ($('.selected-course[data-code="AIST1110"]').length) { s_count++; }
    if ($('.selected-course[data-code="CSCI1110"]').length) { s_count++; }
    if ($('.selected-course[data-code="CSCI1120"]').length) { s_count++; }
    if ($('.selected-course[data-code="CSCI1130"]').length) { s_count++; }
    if ($('.selected-course[data-code="CSCI1510"]').length) { s_count++; }
    if ($('.selected-course[data-code="CSCI1520"]').length) { s_count++; }
    if ($('.selected-course[data-code="CSCI1530"]').length) { s_count++; }
    if ($('.selected-course[data-code="CSCI1540"]').length) { s_count++; }
    if ($('.selected-course[data-code="CSCI2040"]').length) { s_count++; }

    if (s_count > 1) {
      error = 1;
      msg += '<li>Please select either AIST1110 or CSCI1110 / 1120 / 1130 / 1510 / 1520 / 1530 / 1540 / 2040</li>';
    }

    if ($('.selected-course[data-code="MGNT4070"]').length && $('.selected-course[data-code="SOWK2203"]').length) {
      error = 1;
      msg += '<li>Please select either MGNT4070 or SOWK2203</li>';
    }


    showSubtotal('Required Courses', check0);
    showSubtotal('Mindset and Values', check1);
    showSubtotal('Knowledge and Skills', check2);
    showSubtotal('Practices', check3);

    if (check0 < 3 || check0 > 3) {
      error = 1;
      msg += '<li>3 units of courses from Required Courses</li>';
    }
    if (check1 < 3 || check1 > 6) {
      error = 1;
      msg += '<li>3 to 6 units of courses from Mindset and Values</li>';
    }
    if (check2 < 6 || check2 > 12) {
      error = 1;
      msg += '<li>6 to 12 units of courses from Knowledge and Skills</li>';
    }
    if (check3 < 3 || check3 > 6) {
      error = 1;
      msg += '<li>3 to 6 units of courses from Practices</li>';
    }
    if (check4 < 6) {
      error = 1;
      msg += '<li>At least 6 units of courses at 3000 level or above</li>';
    }

    $.each(check5, function(key, value) {
      if (value > 6 && key != 'epin') {
        error = 1;
        msg += '<li>Students should not take more than 6 units of courses offered by Department/ Schools of the same Faculty except for EPIN courses</li>';
      }
    });

    if (check_total < 18) {
      error = 1;
      msg += '<li>At least 18 units</li>';
    }

    if (error != 1) {
      msg = '<p>Your course selection fulfills all the requirements</p>';
      $('.sc-popup-form').show();
    } else {
      msg += '</ul>';
      $('.sc-popup-form').hide();
    }

    $('.sc-popup-content').html(msg);
     
  });

  $('.sc-checkout').click(function(){
    $('.sc-popup-trigger').trigger('click');
  });

  function showSubtotal(title, unit) {
    if (unit > 0) {
      var text = '<div class="sc-subtotal"><div class="sc-subtotal-heading">' + title + '</div><div class="sc-subtotal-content">No. of units&nbsp;&nbsp;&nbsp;' + unit + '</div></div>';
    }
    $('.sc-subtotals').append(text);
  }

});


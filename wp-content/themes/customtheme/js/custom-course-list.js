jQuery(function($){
	$('.course-filter select').change(function(){
		$('#form-filters').submit();
	});
});
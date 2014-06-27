$(document).ready(function(){
	var check = '<span class="check"></span>'
	var done = '<span class="done"></span>'
	var image = '<span class="image"></span>'
$( "input" ).keyup(function(event) {
    var value = $( this ).val().trim();
    var work = '<li class="new">'+ check + value + image + '</li>';
    if (event.keyCode == 13 && value.length > 0) {
    		$("ul").prepend(work);
    		$("li").show();
    		$("li:last-child").hide();
    		$("input").val('');
    	};
  })
	$(document).on("click", ".image", function(){
     $(this).closest('li').fadeOut(200).remove();
	});
	$(document).on("click", ".check", function(){
		if (!$(this).closest('li').hasClass('a1')) {
			$(this).closest('li').addClass("a1");
			$(this).addClass('done');
			$(this).removeClass('check');
		}
		else {
			$(this).closest('li').removeClass("a1");
		}
	})
	$(document).on("click", ".done", function(){
			$(this).closest('li').removeClass("a1");
			$(this).addClass('check');
			$(this).removeClass('done');
		});
});

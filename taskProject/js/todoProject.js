$("ul").on("click", "span", function(event){
	// Esse this se refere ao 'span'
	$(this).parent().fadeOut(500, function(){
		// Esse this se refere ao pai do 'span'. No caso, um 'li'.
		$(this).remove();
	});

	// impede que o evento seja propagado e a linha 
	// seja marcada como feita depois de ser removida
	event.stopPropagation();
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		$("ul").append("<li>" + $(this).val() + " <span><i class='fa fa-times'></i></span></li>");
		$(this).val("");
	}
});
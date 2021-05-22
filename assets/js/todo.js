//Check off Specific Todos by Clicking
var list = [];

$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span",function(event){

	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); 
});


$("input").on("keypress", function(event){
	if(event.which===13){
		var value = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + value +"</li>")
		$(this).attr("placeholder", "Add new task here...")
	}
});

$(".fa-plus").on("click", function(){
	$("input").fadeToggle(200);
})
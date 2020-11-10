
//Making the line through work
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");


// Thats the other way
//	if($(this).css("color") === "rgb(128, 128, 128)"){
//		$(this).css({
//			color: "black",
//			textDecoration: "none"
//		});	
//	}else{
//		$(this).css({
//			textDecoration: "line-through",
//			color: "grey"
//		});	
//	}
});



//click on X to delete ToDo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
	$(this).remove();
	});
	event.stopPropagation();
});




//Adding the element
$("input[type = 'text']").keypress(function(event){
	if(event.which == 13)
	{
		//grabbing new todo from input
		var todo = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>")
	}
});


//Making the heading button work
$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});


$("input").css("background",function(){

	return $(this).data("color");
});

$("input").on("click",function(){

	var yep = $(this).data("color")

	if (checked()){
		$(".main").css("color",yep);
	}
	else{$("body").css("background-color",yep)
}

});

function checked(){
	return $("#modify-texte").is(":checked");

}

checked();




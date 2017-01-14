$("input").css("background",function(){

	return $(this).data("color");
});

$("input").on("click",function(){
	var couleur = $(this).data("color")
	if (checked()){
		$(".main").css("color",couleur);
	}else{$("body").css("background-color",couleur)
}
});
function checked(){
	return $("#modify-texte").is(":checked");
}
checked();




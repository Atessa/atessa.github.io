$(document) .ready(function(){
	// code to execute here
	//$(".about p").css("color", "red");
		// nav click event
	$("nav a").click(function(){
		$(".active").removeClass("active")
		$(this).addClass("active");
		console.log("nav got clicked")
	});
});



$(document).ready(function() {
	$("button#night-mode").click(function() {
		$("body").removeClass("light-background");
		$("body").addClass("dark-background");
	});
	$("button#night-mode-off").click(function() {
		$("body").addClass("light-background");
	});
	
	
	
});
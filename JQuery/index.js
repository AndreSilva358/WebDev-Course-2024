//JQuery("h1");
$("h1").click(function(){
    $("h1").css("color", "violet");
});

$("a").attr("href", "https://www.youtube.com/watch?v=yDp3cB5fHXQ&ab_channel=hbomberguy");

$("button").click(function(){
	$("h1").css("color", "purple");
}); //adding an event listener that will listen for clicks on the buttons to change the colour of the H1
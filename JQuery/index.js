//JQuery("h1");
$("h1").click(function(){
    $("h1").css("color", "violet");
});

$("a").attr("href", "https://www.youtube.com/watch?v=yDp3cB5fHXQ&ab_channel=hbomberguy");

$("button").click(function(){
	$("h1").css("color", "purple");
}); //adding an event listener that will listen for clicks on the buttons to change the colour of the H1

$(document).keydown(function(event){
    $("h1").text(event.key);
}); //changes H1 based on keyboard input (keydown)

$("button").on("mouseover", function(){
	$("button").css("color", "red");
    $("button").css("font-weight", "bold");
}) // changes button colour when you hover the mouse over it.

$("button").on("click", function(){
	$("button").text("Dammit, you weren't supposed to actually click me.");
}) 
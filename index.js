//  $( ".question" ) that's on the Class name
// $( "#q1" ) that's on the Id name

$( "#q1" ).click(function() {
//  alert( "Handler for .click() called." );
//	console.log($("#q1"));

	$( "#a1" ).slideToggle( "slow");
//	$( "#a1" ).fadeToggle( "slow");

	$("#arrow1-down,#arrow1-up").toggleClass("collapse");
//	$("#arrow1-up").toggleClass("collapse");

});

$( "#q2" ).click(function() {
//  alert( "Handler for .click() called." );
//	console.log($("#q1"));

	$( "#a2" ).slideToggle( "slow");
//	$( "#a1" ).fadeToggle( "slow");

	$("#arrow2-down,#arrow2-up").toggleClass("collapse");
//	$("#arrow1-up").toggleClass("collapse");

});

$( "#q3" ).click(function() {
//  alert( "Handler for .click() called." );
//	console.log($("#q1"));

	$( "#a3" ).slideToggle( "slow");
//	$( "#a1" ).fadeToggle( "slow");

	$("#arrow3-down,#arrow3-up").toggleClass("collapse");
//	$("#arrow1-up").toggleClass("collapse");

});
$(document).ready(function(){

  var sessionLength = parseInt($("#session").html());
  var breakLength = parseInt($("#break").html());

  $("#play").click(function(){
    $("#play").css("display", "none");
    $(".fa").css("color", "#fff");
    $("#pause").css("display", "inline-block");
    $("#stop").css("display", "inline-block");
    $("body").css("background-color", "#ef5350");
	});

  $("#pause").click(function(){
		$("#pause").css("display", "none");
    $("#play").css("display", "inline-block");
	});

  $("#stop").click(function(){
    $("#pause").css("display", "none");
    $("#stop").css("display", "none");
    $(".fa").css("color", "#ef5350");
    $("#play").css("display", "inline-block");
    $("body").css("background-color", "#eee");
	});

});

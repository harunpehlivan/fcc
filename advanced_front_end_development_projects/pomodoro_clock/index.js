$(document).ready(function(){
  var isPaused = true;
  var sessionLength = parseInt($("#session").html());
  var breakLength = parseInt($("#break").html());
  $("#time").text(sessionLength);
  var time = parseInt($("#time").html());

  var s = setInterval(function(){
    if(!isPaused){
      time--;
      if(time === 0){
        isPaused = true;
      }
      $("#time").text(time);
    }
  }, 1000);

  $("#play").click(function(e){
    $("#play").css("display", "none");
    $(".fa").css("color", "#fff");
    $("#pause").css("display", "inline-block");
    $("#stop").css("display", "inline-block");
    $("body").css("background-color", "#ef5350");
    e.preventDefault();
    isPaused = false;
	});

  $("#pause").click(function(e){
		$("#pause").css("display", "none");
    $("#play").css("display", "inline-block");
    e.preventDefault();
    isPaused = true;
	});

  $("#stop").click(function(e){
    $("#pause").css("display", "none");
    $("#stop").css("display", "none");
    $(".fa").css("color", "#ef5350");
    $("#play").css("display", "inline-block");
    $("body").css("background-color", "#eee");
    e.preventDefault();
    isPaused = true;
    time = sessionLength;
    $("#time").text(time);
	});

});

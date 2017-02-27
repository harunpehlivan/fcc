$(document).ready(function(){

  var sessionLength = parseInt($("#session").html());
  var breakLength = parseInt($("#break").html());
  var time = 0;
  var sessionInterval, sessionTimeout, breakInterval, breakTimeout;
  var pomodoro = true;

  stopTimer();

  function stopTimer(){
    pauseTimer();
    $("body").css("background-color", "#eee");
    $("footer").css("background-color", "#bdbdbd");
    $("footer a").css("color", "#efefef");
    time = sessionLength;
    $("#time").html(time);
    pomodoro = true;
  }

  function pauseTimer(){
    if(!pomodoro){
      clearInterval(breakInterval);
    }else{
      clearInterval(sessionInterval);
    }
  }

  function playTimer(){
    if(!pomodoro){
      $("body").css("background-color", "#66bb6a");
      $("footer").css("background-color", "#43a047");
      $("footer a").css("color", "#cdeace");
      breakInterval = setInterval(breakTick, 1000);
    }else{
      $("body").css("background-color", "#ef5350");
      $("footer").css("background-color", "#e53935");
      $("footer a").css("color", "#f9cecd");
      sessionInterval = setInterval(sessionTick, 1000);
    }
  }

  function breakTick(){
    time--;
    $("#time").html(time);
    if(time === 0){
      pauseTimer();
      $("#pause").css("display", "none");
      breakTimeout = setTimeout(breakNotification, 1000);
    }
  }

  function sessionTick(){
    time--;
    $("#time").html(time);
    if(time === 0){
      pauseTimer();
      sessionTimeout = setTimeout(sessionNotification, 1000);
    }
  }

  function breakNotification(){

    alert("break complete");
  }

  function sessionNotification(){
    time = breakLength;
    $("#time").html(time);
    pomodoro = false;
    playTimer();
  }



  $("#play").click(function(){
    $("#play").css("display", "none");
    $(".pdbtn").css("color", "#fff");
    $("#pause").css("display", "inline-block");
    $("#stop").css("display", "inline-block");
    playTimer();
	});

  $("#pause").click(function(){
		$("#pause").css("display", "none");
    $("#play").css("display", "inline-block");
    pauseTimer();
	});

  $("#stop").click(function(){
    $("#pause").css("display", "none");
    $("#stop").css("display", "none");
    $(".pdbtn").css("color", "#ef5350");
    $("#play").css("display", "inline-block");
    stopTimer();
	});

});

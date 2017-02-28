$(document).ready(function(){
  $("#name-input").val("Pomodoro");
  $("#session-input").val("25");
  $("#break-input").val("5");
  var sessionLength = parseInt($("#session-input").val() * 60);
  var breakLength = parseInt($("#break-input").val() * 60);
  var time = 0;
  var sessionInterval, sessionTimeout, breakInterval, breakTimeout;
  var pomodoro = true;

  $("#session-input").keyup(function(){
    sessionLength = parseInt($("#session-input").val() * 60);
    time = sessionLength;
    if(time % 60 >= 10){
      $("#time").html(Math.floor(time / 60) + ":" + (time % 60));
    }else{
      $("#time").html(Math.floor(time / 60) + ":" + "0" + (time % 60));
    }
  });

  $("#break-input").keyup(function(){
    breakLength = parseInt($("#break-input").val() * 60);
  });

  stopTimer();

  function stopTimer(){
    pauseTimer();
    $("body").css("background-color", "#eee");
    $("footer").css("background-color", "#e0e0e0");
    $("footer a").css("color", "#a8a8a8");
    time = sessionLength;
    if(time % 60 >= 10){
      $("#time").html(Math.floor(time / 60) + ":" + (time % 60));
    }else{
      $("#time").html(Math.floor(time / 60) + ":" + "0" + (time % 60));
    }
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
    if(time % 60 >= 10){
      $("#time").html(Math.floor(time / 60) + ":" + (time % 60));
    }else{
      $("#time").html(Math.floor(time / 60) + ":" + "0" + (time % 60));
    }
    if(time === 0){
      pauseTimer();
      $("#pause").css("display", "none");
      breakTimeout = setTimeout(breakNotification, 1000);
    }
  }

  function sessionTick(){
    time--;
    if(time % 60 >= 10){
      $("#time").html(Math.floor(time / 60) + ":" + (time % 60));
    }else{
      $("#time").html(Math.floor(time / 60) + ":" + "0" + (time % 60));
    }
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
    if(time % 60 >= 10){
      $("#time").html(Math.floor(time / 60) + ":" + (time % 60));
    }else{
      $("#time").html(Math.floor(time / 60) + ":" + "0" + (time % 60));
    }
    pomodoro = false;
    playTimer();
  }

  $("#play").click(function(){
    $("form").hide();
    $("#time").show();
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
    $("#time").hide();
    $("form").show();
    $("#pause").css("display", "none");
    $("#stop").css("display", "none");
    $(".pdbtn").css("color", "#ef5350");
    $("#play").css("display", "inline-block");
    stopTimer();
	});

});

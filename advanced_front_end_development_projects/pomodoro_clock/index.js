$(document).ready(function(){
  $("#task").html($("#task-input").val() + " session");
  var sessionLength = parseInt($("#session-input").val() * 60);
  var breakLength = parseInt($("#break-input").val() * 60);
  var time, lastFrame = 0;
  var sessionInterval, sessionTimeout, breakInterval, breakTimeout;
  var session = true;

  $( "#notification-input" ).click(function(){

  });

  $("#circle").circleProgress({
    size: 320,
    startAngle: - Math.PI / 2,
    thickness: 5,
    fill: "#fff",
    value: 1
  });

  $("#task-input").keyup(function(){
    $("#task").html($("#task-input").val() + " session");
  });

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
    lastFrame = 0;
    $("body").css("background-color", "#eee");
    $("footer").css("background-color", "#e0e0e0");
    $("footer a").css("color", "#a8a8a8");
    time = sessionLength;
    if(time % 60 >= 10){
      $("#time").html(Math.floor(time / 60) + ":" + (time % 60));
    }else{
      $("#time").html(Math.floor(time / 60) + ":" + "0" + (time % 60));
    }
    session = true;
  }

  function pauseTimer(){
    $($("#circle").circleProgress("widget")).stop();
    lastFrame = $("#circle").data("circle-progress").lastFrameValue;
    if(!session){
      clearInterval(breakInterval);
    }else{
      clearInterval(sessionInterval);
    }
  }

  function playTimer(){
    lastFrame = 0;
    if(!session){
      $("body").css("background-color", "#66bb6a");
      $("footer").css("background-color", "#43a047");
      $("footer a").css("color", "#cdeace");
      $("#task").html($("#task-input").val() + " break");
      $("#circle").circleProgress({
        emptyFill: "#1b5e20",
        animationStartValue: lastFrame,
        animation: {
          duration: time * 1000
        }
      });
      breakInterval = setInterval(breakTick, 1000);
    }else{
      $("body").css("background-color", "#ef5350");
      $("footer").css("background-color", "#e53935");
      $("footer a").css("color", "#f9cecd");
      $("#circle").circleProgress({
        emptyFill: "#b71c1c",
        animationStartValue: lastFrame,
        animation: {
          duration: time * 1000
        }
      });
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
      breakTimeout = setTimeout(breakEvent, 1000);
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
      sessionTimeout = setTimeout(sessionEvent, 1000);
    }
  }

  function breakEvent(){

  }

  function sessionEvent(){
    time = breakLength;
    if(time % 60 >= 10){
      $("#time").html(Math.floor(time / 60) + ":" + (time % 60));
    }else{
      $("#time").html(Math.floor(time / 60) + ":" + "0" + (time % 60));
    }
    session = false;
    playTimer();
  }

  $("#play").click(function(){
    $("form").hide();
    $(".canvas-timer").show();
    $("#task").show();
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
    $(".canvas-timer").hide();
    $("#task").hide();
    $("#task").html($("#task-input").val() + " session");
    $("form").show();
    $("#pause").css("display", "none");
    $("#stop").css("display", "none");
    $(".pdbtn").css("color", "#ef5350");
    $("#play").css("display", "inline-block");
    stopTimer();
	});

});

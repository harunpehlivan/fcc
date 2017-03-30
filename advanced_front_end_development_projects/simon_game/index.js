$(document).ready(function(){
  var pattern = {
    count: 0,
    option: ["green", "red", "yellow", "blue"],
    game: [],
    user: [],
  };
  var strict, turn = false;

  function clearGame(){
    pattern.count = 0;
    pattern.game = [];
  }
  function clearUser(){
    pattern.user = [];
  }
  function addCount(){
    pattern.count++;
    setTimeout(function(){
      $(".counter").html(pattern.count);
    }, 500);
    generateGamePattern();
  }

  function startGame(){
    clearGame();
    addCount();
  }
  function stopGame(){

  }
  function restartGame(){

  }

  function generateGamePattern(){
    pattern.game.push(pattern.option[Math.floor(Math.random() * 4)]);
    showGamePattern();
  }
  function showGamePattern(){
    var i = 0;
    var highlight = setInterval(function(){
      console.log(pattern.game[i]);
      switch(pattern.game[i]){
        case "green":
          $("#green").css("background-color", "#7FE283");
          setTimeout(function(){
            $("#green").css("background-color", "#4CAF50");
          }, 500);
          break;
        case "red":
          $("#red").css("background-color", "#FF7669");
          setTimeout(function(){
            $("#red").css("background-color", "#F44336");
          }, 500);
          break;
        case "yellow":
          $("#yellow").css("background-color", "#FFFF6E");
          setTimeout(function(){
            $("#yellow").css("background-color", "#FFEB3B");
          }, 500);
          break;
        case "blue":
          $("#blue").css("background-color", "#54C9FF");
          setTimeout(function(){
            $("#blue").css("background-color", "#2196F3");
          }, 500);
          break;
      };
      i++;
      if(i >= pattern.game.length){
        clearInterval(highlight);
      }
    }, 1000);
    clearUser();
    turn = true;
  }

  $("#green").click(function(){
    if(turn){

    }
	});
  $("#red").click(function(){
    if(turn){

    }
	});
  $("#yellow").click(function(){
    if(turn){

    }
	});
  $("#blue").click(function(){
    if(turn){

    }
	});

  $("#start").click(function(){
    $("#start").hide();
    $("#stop").css("display", "block");
    $("#restart").removeClass("disabled");
    $(".counter").show();
    startGame();
	});
  $("#stop").click(function(){
    $("#stop").hide();
    $("#start").show();
    $("#restart").addClass("disabled");
    $(".counter").hide();
    stopGame();
	});
  $("#restart").click(function(){
    restartGame();
	});
});

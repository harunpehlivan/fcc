$(document).ready(function(){
  var pattern = {
    color: ["green", "red", "yellow", "blue"],
    count: 0,
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
    }, 1000);
  }

  function startGame(){
    clearGame();
    $(".counter").html("––");
    addCount();
    generateGamePattern();
  }
  function stopGame(){

  }

  function generateGamePattern(){
    pattern.game.push(pattern.color[Math.floor(Math.random() * 4)]);
    showGamePattern();
  }
  function showGamePattern(){
    var i = 0;
    var highlight = setInterval(function(){
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
      }
      i++;
      if(i >= pattern.game.length){
        clearInterval(highlight);
        turn = true;
        $(".col").css("cursor", "pointer");
      }
    }, 1000);
    clearUser();
  }

  function checkUserPattern(){
    if(pattern.user[pattern.user.length - 1] !== pattern.game[pattern.user.length - 1]){
      if(strict){
        alert("Game over!");
        startGame();
      }else{
        alert("Try again!");
        showGamePattern();
      }
    }else{
      var check = pattern.game.length === pattern.user.length;
      if(check){
        if(pattern.count == 20){
          alert("You won!");
        }else{
          addCount();
          turn = false;
          $(".col").css("cursor", "default");
          generateGamePattern();
        }
      }
    }
  }

  $("#green").click(function(){
    if(turn){
      $("#green").css("background-color", "#7FE283");
      setTimeout(function(){
        $("#green").css("background-color", "#4CAF50");
      }, 500);
      pattern.user.push("green");
      checkUserPattern();
    }
	});
  $("#red").click(function(){
    if(turn){
      $("#red").css("background-color", "#FF7669");
      setTimeout(function(){
        $("#red").css("background-color", "#F44336");
      }, 500);
      pattern.user.push("red");
      checkUserPattern();
    }
	});
  $("#yellow").click(function(){
    if(turn){
      $("#yellow").css("background-color", "#FFFF6E");
      setTimeout(function(){
        $("#yellow").css("background-color", "#FFEB3B");
      }, 500);
      pattern.user.push("yellow");
      checkUserPattern();
    }
	});
  $("#blue").click(function(){
    if(turn){
      $("#blue").css("background-color", "#54C9FF");
      setTimeout(function(){
        $("#blue").css("background-color", "#2196F3");
      }, 500);
      pattern.user.push("blue");
      checkUserPattern();
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
    startGame();
	});
  $("#strict").change(function(){
    if($(this).is(":checked")){
      strict = true;
    }else{
      strict = false;
    }
  });
});

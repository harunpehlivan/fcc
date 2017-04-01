$(document).ready(function(){
  var strict, turn = false;
  var pattern = {
    color: ["green", "red", "yellow", "blue"],
    count: 0,
    game: [],
    user: [],
  };
  var highlight;

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
  function flashMessage(msg){
    $(".counter").html(msg);
    var lf = function(){
      $(".counter").hide();
      var HnFl = setTimeout(function(){
        $(".counter").show();
      }, 250);
    };
    var cnt = 0;
    lf();
    flHn = setInterval(function(){
      lf();
      cnt++;
      if(cnt === 2){
        clearInterval(flHn);
      }
    }, 500);
  }

  function startGame(){
    clearGame();
    $(".counter").html("––");
    flashMessage("––");
    setTimeout(function(){
      addCount();
      generateGamePattern();
    }, 500);
  }

  function generateGamePattern(){
    pattern.game.push(pattern.color[Math.floor(Math.random() * 4)]);
    showGamePattern();
  }
  function showGamePattern(){
    var i = 0;
    highlight = setInterval(function(){
      switch(pattern.game[i]){
        case "green":
          $("#green").css("background-color", "#7FE283");
          $("#green-audio")[0].play();
          setTimeout(function(){
            $("#green").css("background-color", "#4CAF50");
          }, 500);
          break;
        case "red":
          $("#red").css("background-color", "#FF7669");
          $("#red-audio")[0].play();
          setTimeout(function(){
            $("#red").css("background-color", "#F44336");
          }, 500);
          break;
        case "yellow":
          $("#yellow").css("background-color", "#FFFF6E");
          $("#yellow-audio")[0].play();
          setTimeout(function(){
            $("#yellow").css("background-color", "#FFEB3B");
          }, 500);
          break;
        case "blue":
          $("#blue").css("background-color", "#54C9FF");
          $("#blue-audio")[0].play();
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
        turn = false;
        $(".col").css("cursor", "default");
        flashMessage("!!");
        $("#error-audio")[0].play();
        setTimeout(function(){
          startGame();
        }, 1000);
      }else{
        turn = false;
        $(".col").css("cursor", "default");
        flashMessage("!!");
        $("#error-audio")[0].play();
        setTimeout(function(){
          showGamePattern();
          setTimeout(function(){
            $(".counter").html(pattern.count);
          }, 1000);
        }, 1000);
      }
    }else{
      var check = pattern.game.length === pattern.user.length;
      if(check){
        if(pattern.count == 20){
          alert("You won!");
        }else{
          turn = false;
          $(".col").css("cursor", "default");
          addCount();
          generateGamePattern();
        }
      }
    }
  }

  $("#green").click(function(){
    if(turn){
      $("#green").css("background-color", "#7FE283");
      $("#green-audio")[0].play();
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
      $("#red-audio")[0].play();
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
      $("#yellow-audio")[0].play();
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
      $("#blue-audio")[0].play();
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
    clearInterval(highlight);
	});
  $("#restart").click(function(){
    clearInterval(highlight);
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

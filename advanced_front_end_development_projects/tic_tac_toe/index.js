$(document).ready(function(){
  var player = "X";
  var playerColor = "#ECEFF1";
  var computer = "O";
  var computerColor = "#263238";
  var turn = true;
  var board = [null, null, null, null, null, null, null, null, null];
  var count = 0;

  function reset(){
    board = [null, null, null, null, null, null, null, null, null];
    $(".field").text("");
    count = 0;
    if($("#playx").is(":checked")){
      turn = true;
      $(".field").css("cursor", "pointer");
    }
    if($("#playo").is(":checked")){
      turn = false;
      $(".field").css("cursor", "default");
      computerMove();
    }
  }

  function playerMove(id){
    var playerfield = $("#" + id).text();
    if(playerfield !== "X" && playerfield !== "O"){
      turn = false;
      $(".field").css("cursor", "default");
      board[id] = player;
      $("#" + id).css("color", playerColor);
      $("#" + id).text(player);
      count++;
      checkMove(player);
    }
  }
  function computerMove(){
    var taken = true;
    while(taken === true){
      console.log("!" + count);
      var int = Math.floor(Math.random()* 9);
      var computerfield = $("#" + int).text();
      if(computerfield !== "X" && computerfield !== "O"){
        taken = false;
        turn = true;
        $(".field").css("cursor", "pointer");
        board[int] = computer;
        $("#" + int).css("color", computerColor);
        $("#" + int).text(computer);
        count++;
        checkMove(computer);
      }
    }
  }

  function checkMove(current){
    if((board[0] === current && board[1] === current && board[2] === current) || (board[3] === current && board[4] === current && board[5] === current) || (board[6] === current && board[7] === current && board[8] === current) || (board[0] === current && board[3] === current && board[6] === current) || (board[1] === current && board[4] === current && board[7] === current) || (board[2] === current && board[5] === current && board[8] === current) || (board[0] === current && board[4] === current && board[8] === current) || (board[2] === current && board[4] === current && board[6] === current)){
      turn = false;
      $(".field").css("cursor", "default");
      setTimeout(function(){
        alert("'" + current + "' WON!");
        reset();
      }, 500);
    }else if(!turn && count < 9){
      computerMove();
    }else if(count === 9){
      setTimeout(function(){
        alert("DRAW!");
        reset();
      }, 500);
    }
  }

  $(".field").click(function(){
    if(turn){
      playerMove($(this).attr("id"));
    }
  });
  $(".play").change(function(){
    if($("#playx").is(":checked")){
      player = "X";
      playerColor = "#ECEFF1";
      computer = "O";
      computerColor = "#263238";
      reset();
    }
    if($("#playo").is(":checked")){
      player = "O";
      playerColor = "#263238";
      computer = "X";
      computerColor = "#ECEFF1";
      reset();
    }
  });
});

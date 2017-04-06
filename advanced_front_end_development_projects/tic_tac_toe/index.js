$(document).ready(function(){
  var player = "X";
  var computer = "O";
  var turn = true;
  var board = [null, null, null, null, null, null, null, null, null];
  var count = 0;

  function reset(){
    turn = true;
    $(".field").css("cursor", "pointer");
    board = [null, null, null, null, null, null, null, null, null];
    $(".field").text("");
    count = 0;
  }

  function playerMove(id){
    var field = $("#" + id).text();
    if(field !== "X" && field !== "O"){
      turn = false;
      $(".field").css("cursor", "default");
      board[id] = player;
      $("#" + id).text(player);
      count++;
      checkMove(player);
    }
  }
  function computerMove(){

  }

  function checkMove(current){
    var combination = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]]
    ];
    for(var i = 0; i < combination.length; i++){
      if(combination[i][0] === current && combination[i][1] === current && combination[i][2] === current){
        console.log(current + " won!");
        reset();
      }else{
        if(turn){
          playerMove();
        }else{
          computerMove();
        }
      }
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
      computer = "O";
      reset();
    }
    if($("#playo").is(":checked")){
      player = "O";
      computer = "X";
      reset();
    }
  });
});

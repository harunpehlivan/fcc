const project_name = "survey-form";

$(document).ready(function(){
  $("select").material_select();
  $("select[required]").css({position: "absolute", display: "inline", height: 0, padding: 0, width: 0});
  $("#number").focus(function(){
    $("#number-label").css("color","#90A4AE");
  }).blur(function(){
    $("#number-label").css("color","#9E9E9E");
  });
  $("#no").focus(function(){
    $("#number-label").css("color","#90A4AE");
  }).blur(function(){
    $("#number-label").css("color","#9E9E9E");
  });
});

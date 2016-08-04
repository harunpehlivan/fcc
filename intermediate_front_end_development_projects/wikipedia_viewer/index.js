$(document).ready(function(){
  $("#init-input").focus();
  $("#init-input").keyup(function(e){
    $("#topbar-input").val(this.value);
  });
  $(".search").on("click", function(){
    search();
  });
  $("input").on("keydown", function(){
    if(event.keyCode == 13){
      search();
    }
  });
  function search(){
    $("#wikipedia-results").empty();
    var input = $("#topbar-input").val();
    if (input.length > 0){
      $("#wikipedia-init").hide();
      $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + encodeURI(input) + "&format=json&callback=?", function(data){
        $("#wikipedia-results").html(JSON.stringify(data));
      });
      $("#wikipedia-topbar").show();
      $("#wikipedia-results").show();
    }
  }
});

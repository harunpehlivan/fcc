$(document).ready(function(){
  var input;
  $("#init-input").focus();
  $("#init-input").keyup(function(e){
    $("#top-bar-input").val(this.value);
    $("#wikipedia-init").hide();
    $("#wikipedia-top-bar").show();
    $("#top-bar-input").focus();
  });
  $("#top-bar-input").autocomplete({
    source: function(request, response){
      $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        dataType: "jsonp",
        data: {
          "action": "opensearch",
          "format": "json",
          "search": request.term
        },
        success: function(data){
          response(data[1]);
        }
      });
    },
    select: function(event, ui){
      input = ui.item.label;
      search();
    }
  });
  $(".search").on("click", function(){
    input = $("#top-bar-input").val();
    search();
  });
  $("input").on("keydown", function(){
    if(event.keyCode == 13){
      input = $("#top-bar-input").val();
      search();
    }
  });
  function search(){
    $("#wikipedia-results").empty();
    if (input.length > 0){
      $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + encodeURI(input) + "&format=json&callback=?", function(data){
        $("#wikipedia-results").html(JSON.stringify(data));
      });
      $("#wikipedia-results").show();
    }
  }
});

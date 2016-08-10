$(document).ready(function(){
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
      if (event.which === 1){
        search(ui.item.value);
      }
    }
  });
  $(".search").on("click", function(){
    search($("#top-bar-input").val());
  });
  $("input").on("keydown", function(){
    if(event.keyCode == 13){
      $("#top-bar-input").autocomplete("close");
      search($("#top-bar-input").val());
    }
  });
  function search(input){
    $("#wikipedia-results").empty();
    if (input.length > 0){
      $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + encodeURI(input) + "&callback=?", function(data){
        for(var i = 0; i < data[1].length; i++){
          $("#wikipedia-results").append("<div class='card card-" + i + "'></div>");
          $(".card-"+i).append("<div class='card-content card-content-" + i + "'></div>");
          $(".card-content-"+i).append("<h4>" + data[1][i] + "</h4>");
          $(".card-content-"+i).append("<p>" + data[2][i] + "</p>");
          $(".card-"+i).append("<div class='card-link card-link-" + i + "'></div>");
          $(".card-link-"+i).append("<a href='" + data[3][i] + "' target='_blank' rel='noopener noreferrer'>read more</a>");
          $(".card-link-"+i).append("<a href='https://en.wikipedia.org/w/index.php?title=" + encodeURI(data[1][i]) + "&action=edit' target='_blank' rel='noopener noreferrer'>edit source</a>");
        }
      });
      $("#wikipedia-results").show();
      $("#top-bar-input").focus();
    }
  }
});

$(document).ready(function(){
  var quotes = [];
  $.getJSON("https://raw.githubusercontent.com/bomholt/freecodecamp_solutions/master/front_end_development_certification/basic_front_end_development_projects/_assets/json/quotes.json", function(data){
    quotes = data;
    newQuote();
  });
  var i = 0;
  var j;

  function getQuote(){
    $(".text").html(quotes[i].text);
    $(".author").html(quotes[i].author);
    $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quotes[i].text + " ― " + quotes[i].author);
  }

  function newQuote(){
    i = Math.floor(Math.random()*quotes.length);
    if(i === j){
      while(i === j){
        i = Math.floor(Math.random()*quotes.length);
      }
    }
    j = i;
    getQuote(i);
  }

  $("#quote").on("click", function(){
    newQuote();
  });
});

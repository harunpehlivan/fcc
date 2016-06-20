$(document).ready(function(){
  var quotes = [];
  $.getJSON("https://raw.githubusercontent.com/bomholt/freecodecamp_solutions/master/intermediate_front_end_development_projects/_assets/json/quotes.json", function(data){
    quotes = data;
    newQuote();
  });
  var i = 0;
  var j;
  $("#quote").on("click", function(){
    newQuote();
  });
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
  function getQuote(){
    var $image = $(".card-image");
    MotionUI.animateIn($image, 'fade-in');
    var $content = $(".card-content");
    MotionUI.animateIn($content, 'fade-in');
    $("#image").attr("src", quotes[i].image);
    $("#text").html(quotes[i].text);
    $("#author").html(quotes[i].author);
    $("#episode").html(quotes[i].episode);
    $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + "\"" + quotes[i].text + "\" - " + quotes[i].author);
  }
});

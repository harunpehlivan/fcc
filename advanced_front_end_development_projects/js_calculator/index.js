window.onload = function(){

  var keys = document.getElementsByClassName("enable"),
      hiddenResult = document.querySelectorAll(".hiddenResult h4")[0],
      visibleResult = document.querySelectorAll(".visibleResult h2")[0],
      del = document.getElementsByClassName("del")[0];

  del.onclick = function(){
    hiddenResult.innerHTML = "";
    visibleResult.innerHTML = "";
  };

  for(var i = 0; i < keys.length; i++){
    if(keys[i].innerHTML === "="){
      keys[i].addEventListener("click", calculate(i));
    }else{
      keys[i].addEventListener("click", addValue(i));
    }
  }

  function addValue(i){
    return function(){
      switch(keys[i].innerHTML){
        case "÷":
          hiddenResult.innerHTML += "/";
          visibleResult.innerHTML += " ÷ ";
          break;
        case "×":
          hiddenResult.innerHTML += "*";
          visibleResult.innerHTML += " * ";
          break;
        case "-":
          hiddenResult.innerHTML += "-";
          visibleResult.innerHTML += " - ";
          break;
        case "+":
          hiddenResult.innerHTML += "+";
          visibleResult.innerHTML += " + ";
          break;
        default:
          hiddenResult.innerHTML += keys[i].innerHTML;
          visibleResult.innerHTML += keys[i].innerHTML;
      }
    };
  }

  function calculate(i){
    return function(){
      var fix = hiddenResult.innerHTML.replace(/[\d.]+/g, function(n){
        return parseFloat(n);
      });
      visibleResult.innerHTML = eval(fix);
    };
  }
};

window.onload = function(){

  var keys = document.getElementsByTagName("span"),
      operations = ["/", "*", "-", "+"],
      hiddenResult = document.querySelectorAll(".hiddenResult h4")[0],
      visibleResult = document.querySelectorAll(".visibleResult h2")[0];

  for(var i = 0; i < keys.length; i++){
    if(keys[i].innerHTML === "="){
      keys[i].addEventListener("click", calculate(i));
    }else{
      keys[i].addEventListener("click", addValue(i));
    }
  }

  function addValue(i){
    return function(){
      var lastChar = hiddenResult.innerHTML.slice(-1);
      switch(keys[i].innerHTML){
        case ".":
          if(lastChar.indexOf(".") > -1){
            hiddenResult.innerHTML = hiddenResult.innerHTML.slice(0, -1);
            visibleResult.innerHTML = visibleResult.innerHTML.slice(0, -1);
            hiddenResult.innerHTML += ".";
            visibleResult.innerHTML += ".";
          }else{
            hiddenResult.innerHTML += ".";
            visibleResult.innerHTML += ".";
          }
          break;
        case "DEL":
          hiddenResult.innerHTML = "";
          visibleResult.innerHTML = "";
          break;
        case "÷":
          if(operations.indexOf(lastChar) > -1){
            hiddenResult.innerHTML = hiddenResult.innerHTML.slice(0, -1);
            visibleResult.innerHTML = visibleResult.innerHTML.slice(0, -3);
            hiddenResult.innerHTML += "/";
            visibleResult.innerHTML += " ÷ ";
          }else{
            hiddenResult.innerHTML += "/";
            visibleResult.innerHTML += " ÷ ";
          }
          break;
        case "×":
          if(operations.indexOf(lastChar) > -1){
            hiddenResult.innerHTML = hiddenResult.innerHTML.slice(0, -1);
            visibleResult.innerHTML = visibleResult.innerHTML.slice(0, -3);
            hiddenResult.innerHTML += "*";
            visibleResult.innerHTML += " × ";
          }else{
            hiddenResult.innerHTML += "*";
            visibleResult.innerHTML += " × ";
          }
          break;
        case "-":
          if(operations.indexOf(lastChar) > -1){
            hiddenResult.innerHTML = hiddenResult.innerHTML.slice(0, -1);
            visibleResult.innerHTML = visibleResult.innerHTML.slice(0, -3);
            hiddenResult.innerHTML += "-";
            visibleResult.innerHTML += " - ";
          }else{
            hiddenResult.innerHTML += "-";
            visibleResult.innerHTML += " - ";
          }
          break;
        case "+":
          if(operations.indexOf(lastChar) > -1){
            hiddenResult.innerHTML = hiddenResult.innerHTML.slice(0, -1);
            visibleResult.innerHTML = visibleResult.innerHTML.slice(0, -3);
            hiddenResult.innerHTML += "+";
            visibleResult.innerHTML += " + ";
          }else{
            hiddenResult.innerHTML += "+";
            visibleResult.innerHTML += " + ";
          }
          break;
        case "sin":
          hiddenResult.innerHTML += "Math.sin(";
          visibleResult.innerHTML += "sin(";
          break;
        case "cos":
          hiddenResult.innerHTML += "Math.cos(";
          visibleResult.innerHTML += "cos(";
          break;
        case "tan":
          hiddenResult.innerHTML += "Math.tan(";
          visibleResult.innerHTML += "tan(";
          break;
        case "ln":
          hiddenResult.innerHTML += "Math.log(";
          visibleResult.innerHTML += "ln(";
          break;
        case "log":
          hiddenResult.innerHTML += "Math.log10(";
          visibleResult.innerHTML += "log(";
          break;
        case "!":

          break;
        case "π":
          hiddenResult.innerHTML += "Math.PI";
          visibleResult.innerHTML += "π";
          break;
        case "e":

          break;
        case "^":

          break;
        case "√":
          hiddenResult.innerHTML += "Math.sqrt(";
          visibleResult.innerHTML += "√(";
          break;
        default:
          hiddenResult.innerHTML += keys[i].innerHTML;
          visibleResult.innerHTML += keys[i].innerHTML;
      }
    };
  }
  function calculate(i){
    return function(){
      var result = eval(hiddenResult.innerHTML).toFixed(11);
      visibleResult.innerHTML = parseFloat(result);
    };
  }
};

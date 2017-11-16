//debugger;
var inputArray = function(input) {
  var array = [];

  for (var index = 1; index <= input; index += 1) {
    if ((index % 15) === 0) {
      array.push("ping-pong");
    }
    else if ((index % 5) === 0) {
      array.push("pong");
    }
    else if ((index % 3) === 0) {
      array.push("ping");
    }
    else {
      array.push(index);
    }
  }
  return array;
}
console.log(inputArray);
$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
$( "ul" ).empty();
var input = parseInt($("input#number").val());
var result = inputArray(input);
result.forEach(function(result){
  $("ul").append("<li>" + result + "</li>");
});
//alert(result);
$(".result").show(result);
});
});

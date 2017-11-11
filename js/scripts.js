$(document).ready(function(){

  $("#inputs").submit(function(event) {
    event.preventDefault();
  });
});
var array = [];
var inputtedNumber = parseInt($("input#number").val());
array.push(inputtedNumber);
var arrayUppers = array.map(function(arrayUpper) {
      
    });

    arrayUppers.forEach(function(arrayUpper){
      var element = $("<li>" + arrayUpper + "</li>");
      $(".result").append(element);

       $(".result").show();
   });

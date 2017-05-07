$(document).ready(function(){
  var size= prompt("What size sketchpad? Enter a number between 1 and 100");
  while (size > 1 && size < 100){
    break;
    alert("Invalid entry, size set to 64");
    size=64};
  for(var i=0;i < size*size; size++){
    var square  = $("<div class='square'></div>");
      square.appendTo("#wrapper");
    }
});
 



$(document).ready(function(){ 
   
  var makeWrapper = function(size){
  for(var i=0; i < size; i++){
    for(var j=0; j < size; j++){ 
      var square  = $("<div class='square'></div>");     
      square.appendTo("#wrapper");
        
    }
  }
 }

var size = 16
  
makeWrapper(size)

  
var squareSize = $(".square").outerHeight();

var resizeGrid = function(newSize){
  $(".square").remove()
  makeWrapper(newSize);
  $(".square").outerHeight(640/newSize);
}

$("button").click(function(){
  size = prompt("Set the size, pick a number between 1 and 64")
  resizeGrid(size);
});

});




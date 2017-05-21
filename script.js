

$(document).ready(function(){
  var size = 16;
  makeWrapper(size);
  resizeGrid(size);
}); 
   
  var makeWrapper = function(size){
  for(var i=0; i < size*size; i++){
    var square  = $("<div class='square'></div>");     
    square.appendTo("#wrapper");
        
    };}
  $(".square").on("mouseenter",function(){
    $(this).addClass("trail");
  });
  

var size = 16
  
makeWrapper(size)

  


var resizeGrid = function(newSize){
  $(".square").remove()
  makeWrapper(newSize);
  var squareSize = 640/(newSize*1.1);
  $(".square").css({
  "width":squareSize+"px",
  "height":squareSize+"px",
  "border-width":squareSize*0.05+"px",
  })


  $("button").click(function(){
  size = prompt("Set the size, pick a number between 1 and 64")
  resizeGrid(size);
  makeWrapper(size);
  });
};





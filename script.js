

$(document).ready(function(){
  var size = 16;
  makeWrapper(size);
  resizeGrid(size);
}); 
   
var makeWrapper = function(size){
  for(var i=0; i < size*size; i++){
    var square  = $("<div class='square'></div>");     
    square.appendTo("#wrapper");
        
    }; 
}


var resizeGrid = function(newSize){
  var squareSize = 640/(newSize*1.1);
  $(".square").css({
  "width":squareSize+"px",
  "height":squareSize+"px",
  "border-width":squareSize*0.05+"px",
  })
  $(".square").on("mouseenter",function(){
    $(this).addClass("trail");
  });

};



var resizeButton = function(){
  $(".square").remove(); 
  size = prompt("Set the size, pick a number between 1 and 64")
  $("button").on("mouseenter",function(){
    $(this).css({
    "background-color":"#686882"});
  });
  $("button").on("mouseleave", function(){
    $(this).css({
      "background-color":"#d8d8d8"});
  });
  makeWrapper(size);
  resizeGrid(size);
};




$(document).ready(function(){
  var size = 16
  
  
  
   
  var make_wrapper = function(size){
  for(var i=0; i < size; i++){
    for(var j=0; j < size; j++){ 
      var square  = $("<div class='square'></div>");
      
  
      square.appendTo("#wrapper");
      $("square").css("height","640/size");
      $("square").css("height","640/size");
        
    }
  }
 }
  
  make_wrapper(size)

  $("button").click(function(){
    size = prompt("Set the size, pick a number between 1 and 64")
    $("square").remove();
    make_wrapper(size);
  });
  


});



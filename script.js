var size=16

$(document).ready(function(){

  for(var i=0; i < size; i++){
    for(var j=0; j < size; j++){ 
    var square  = $("<div class='square'></div>");
        square.appendTo("#wrapper");
    }
  }
});


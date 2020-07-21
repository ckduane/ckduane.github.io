var mouseXY = {};
    $( document ).on( "mousemove", function( event ) {
      mouseXY.X = event.pageX; 
      mouseXY.Y = event.pageY;
    });
    
    var svg = $("#svg");
    var prevXY = {X: null, Y: null};
    var cowInterval = setInterval(function()
    {
      
      if(prevXY.Y != mouseXY.Y || prevXY.X != mouseXY.X && (prevXY.Y != null || prevXY.X != null)) {
      
      var cowXY = svg.position();
      var diffX = cowXY.left - mouseXY.X;
      var diffY = cowXY.top - mouseXY.Y;
      var tan = diffY / diffX;
     
      var atan = Math.atan(tan)* 180 / Math.PI;;
       if(diffY > 0 && diffX > 0) {
      
        atan += 180; 
      }
      else if(diffY < 0 && diffX > 0) {
      
        atan -= 180;
      }
      
      prevXY.X = mouseXY.X;
      prevXY.Y = mouseXY.Y;
      svg.css({transform: "rotate(" + atan + "deg)"});
    }
    }, 10);
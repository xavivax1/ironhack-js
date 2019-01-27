// Rover Object Goes Here
// ======================
var rover = {
   direction : "N",
   x : 0,
   y : 0,
   travelLog : []
 };

var trip = []; 
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
     rover.direction="W";
    break;
    case "W":
      rover.direction="S";
    break;
    case "S":
      rover.direction="E";
    break;
    case "E":
      rover.direction="N";
    break;
  }
  console.log("turnLeft(): New Direction: " + rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
     rover.direction="E";
    break;
    case "W":
      rover.direction="N";
    break;
    case "S":
      rover.direction="W";
    break;
    case "E":
      rover.direction="S";
    break;
  }
  console.log("turnRigh(): New Direction: " + rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
       if (rover.y > 0 ) rover.y--;
    break;
    case "W":
      if (rover.x > 0 ) rover.x--;
    break;
    case "S":2
    if (rover.y < 9 ) rover.y++;
    break;
    case "E":
    if (rover.x < 9 ) rover.x++;
    break;
  }
  console.log("moveForward was called: ("+ rover.x + "," + rover.y +")")
}

function batchJob( rover, order  ) {
    order = order.toUpperCase(order); 
    logStep(rover);
    if ( checkSyntax(order) ) {
      doJob(rover, order);
    } else {
      console.log("batchJob(): not suitable order found! " + order);
    }
}

function checkSyntax (order) {;
  var legalMoves= "RLF";
                       
  for (var i=0; i<= order.length -1; i++) {
     if (legalMoves.indexOf(order.charAt(i) )=== -1 ) {   // Twilight zone: order.charAt[i] returns undef instd of -1  !!!!
        return false;
     }
  }   
  return true;

}

function logStep(rover) {
  rover.travelLog.push(new String(rover.direction+","+rover.x+","+rover.y) );
}

function doJob( rover, order) {;
 
  for (var i=0; i<= order.length -1; i++) {
    switch (order.charAt(i)) {
      case 'F':
         moveForward(rover);
      break;
      case 'R':
         turnRight(rover);
      break;
      case 'L':
         turnLeft(rover);
      break;         
    }
    logStep(rover);
    
    console.log("new step " + new String(rover.x+","+rover.y) );
  }  
  console.log("My trip around the world: " + rover.travelLog);
}


/*PABLO PERALTA*/ 
// Rover Object Goes Here
// ======================
let marsRover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{x: 0, y: 0}]
}

let opportunityRover = {
  direction: "N",
  x: 2,
  y: 0,
  travelLog: [{x: 2, y: 0}]
}

 let obstacleArray = [{x: 3, y: 0}, {x: 2, y: 1}, {x: 3, y: 4}]


const grid = [
  [{x: 0, y: 0},{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7},{x: 0, y: 8},{x: 0, y: 9}],
  [{x: 1, y: 0},{x: 1, y: 1},{x: 1, y: 2},{x: 1, y: 3},{x: 1, y: 4},{x: 1, y: 5},{x: 1, y: 6},{x: 1, y: 7},{x: 1, y: 8},{x: 1, y: 9}],
  [{x: 2, y: 0},{x: 2, y: 1},{x: 2, y: 2},{x: 2, y: 3},{x: 2, y: 4},{x: 2, y: 5},{x: 2, y: 6},{x: 2, y: 7},{x: 2, y: 8},{x: 2, y: 9}],
  [{x: 3, y: 0},{x: 3, y: 1},{x: 3, y: 2},{x: 3, y: 3},{x: 3, y: 4},{x: 3, y: 5},{x: 3, y: 6},{x: 3, y: 7},{x: 3, y: 8},{x: 3, y: 9}],
  [{x: 4, y: 0},{x: 4, y: 1},{x: 4, y: 2},{x: 4, y: 3},{x: 4, y: 4},{x: 4, y: 5},{x: 4, y: 6},{x: 4, y: 7},{x: 4, y: 8},{x: 4, y: 9}],
  [{x: 5, y: 0},{x: 5, y: 1},{x: 5, y: 2},{x: 5, y: 3},{x: 5, y: 4},{x: 5, y: 5},{x: 5, y: 6},{x: 5, y: 7},{x: 5, y: 8},{x: 5, y: 9}],
  [{x: 6, y: 0},{x: 6, y: 1},{x: 6, y: 2},{x: 6, y: 3},{x: 6, y: 4},{x: 6, y: 5},{x: 6, y: 6},{x: 6, y: 7},{x: 6, y: 8},{x: 6, y: 9}],
  [{x: 7, y: 0},{x: 7, y: 1},{x: 7, y: 2},{x: 7, y: 3},{x: 7, y: 4},{x: 7, y: 5},{x: 7, y: 6},{x: 7, y: 7},{x: 7, y: 8},{x: 7, y: 9}],
  [{x: 8, y: 0},{x: 8, y: 1},{x: 8, y: 2},{x: 8, y: 3},{x: 8, y: 4},{x: 8, y: 5},{x: 8, y: 6},{x: 8, y: 7},{x: 8, y: 8},{x: 8, y: 9}],
  [{x: 9, y: 0},{x: 9, y: 1},{x: 9, y: 2},{x: 9, y: 3},{x: 9, y: 4},{x: 9, y: 5},{x: 9, y: 6},{x: 9, y: 7},{x: 9, y: 8},{x: 9, y: 9}]
];

function turnLeft(rover){
  switch(rover.direction){ 
    case "N":
    rover.direction = "W";
    break;
    case "W": 
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  } 
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch(rover.direction){ 
    case "N":
    rover.direction = "E";
    break;
    case "E": 
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  console.log("turnRight was called!");
}


function moveForward(rover, obstacles){
  
  let posTemp = {
  x: rover.x,
  y: rover.y
}
  
  switch(rover.direction){ 
    case "N":
       posTemp.y--;
      break;
    case "S":
       posTemp.y++;
      break;
    case "E":
       posTemp.x++;
      break;
    case "W":
      posTemp.x--;
      break;   
  }
  
  for(let i = 0; i < obstacles.length; i++){
    if(posTemp.x === obstacles[i].x && posTemp.y === obstacles[i].y){
      console.log("hay un obstaculo");
      return;
    }
  }
  
   switch(rover.direction){ 
    case "N":
       if(rover.y >= 0){
          rover.y--;
       }else {
         console.log("MarsRover can't be here");
       }
      break;
    case "S":
       if(rover.y <= 9){
          rover.y++;
       }else {
          console.log("MarsRover can't be here");
       }
      break;
    case "E":
       if(rover.x <= 9){
         rover.x++;
       }else {
         console.log("MarsRover can't be here");
       }
      break;
    case "W": 
       if(rover.x >= 0){
         rover.x--;
       }else {
         console.log("MarsRover can't be here");
       }
      break;     
   }
  //temporal 
  switch(rover.direction){ 
    case "N":
       posTemp.y--;
      break;
    case "S":
       posTemp.y++;
      break;
    case "E":
       posTemp.x++;
      break;
    case "W":
      posTemp.x--;
      break;   
  }
  
  //console.log(`MarsRover has position: x=${rover.x}, y=${rover.y}`);
  let newPosition = {x: rover.x, y: rover.y};
  rover.travelLog.push(newPosition);
  
  
  console.log("moveForward was called");
  
}

function moveBackward(rover, obstacles){
  //temporal 
  let posTemp = {
  x: rover.x,
  y: rover.y
}
  
  switch(rover.direction){ 
    case "N":
       posTemp.y++;
      break;
    case "S":
       posTemp.y--;
      break;
    case "E":
       posTemp.x--;
      break;
    case "W":
      posTemp.x++;
      break;   
  }
  
  for(let i = 0; i < obstacles.length; i++){
    if(posTemp.x === obstacles[i].x && posTemp.y === obstacles[i].y){
      console.log("hay un obstaculo");
      return;
    }
  }
  
  switch(rover.direction){
    case "N":
      if(rover.y <= 9){
      rover.y++;
      }else {
        console.log("MarsRover can't be here");
      }
      break;
      
    case "S":
      if(rover.y >= 0){
      rover.y--;
      }else {
        console.log("MarsRover can't be here");
      }
      break;
      
    case "E":
      if(rover.x >= 0){
      rover.x--;
      }else {
        console.log("MarsRover can't be here");
      }
      break;
      
    case "W": 
      if(rover.x <= 9){
      rover.x++;
      }else {
        console.log("MarsRover can't be here");
      }
      break;     
  }
  //console.log(`MarsRover has position: x=${rover.x}, y=${rover.y}`);
  let newPosition = {x: rover.x, y: rover.y};
  rover.travelLog.push(newPosition);
  
  console.log("moveBackward was called");
}


function command(rover, orders, obstacles){
 for(let i = 0; i < orders.length; i++ ) {
   let order = orders[i];
   switch(order){
     case "l":
       turnLeft(rover,obstacles);
       break;
     case "r":
       turnRight(rover,obstacles);
       break;
     case "f":
       moveForward(rover, obstacles);
       break;
     case "b":
       moveBackward(rover, obstacles);
       break;
       
     default:
       console.log("invalid command");
   }
 }
}

command(marsRover, 'rfrff', obstacleArray);


for(let i=0; i< marsRover.travelLog.length; i++){
  console.log(`Path MarsRover ${i} ==> x=${marsRover.travelLog[i].x}, y=${marsRover.travelLog[i].y}`);
}

console.log("--------------------------------------");

command(opportunityRover, 'rf', obstacleArray);

for(let i=0; i< opportunityRover.travelLog.length; i++){
  console.log(`Path OpportunityRover ${i} ==> x=${opportunityRover.travelLog[i].x}, y=${marsRover.travelLog[i].y} `);
}


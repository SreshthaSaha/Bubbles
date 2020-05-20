class Bubble {
  
  constructor() { 
    var allInstances = [];
    
    var radius = random(10,50);
    this.x = random(0, width);
    this.y = random(0, height);
    this.width = radius;
    this.height = radius;
    this.color = "white";
    this.velocityX = random(-1, +1);
    this.velocityY= random(-1, +1);
    
    this.display = function() {
      stroke(255);
      fill(this.color);
    ellipse(this.x, this.y, this.width, this.height);
    }
    
    this.move = function() {
      this.x = this.x + this.velocityX;
      this.y = this.y + this.velocityY;
    }
      
  }
}
  
 
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  var b1 = new Bubble();
  b1.velocityX = 1;
  b1.velocityY = 1;
  b1.color = "blue";
  b1.display();
  b1.move();
 
}
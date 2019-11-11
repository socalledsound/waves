let r = 30;
let t = 0;
let tip1y = -120;
let tip2y = -160;
let angle = 0;

let img;

function preload(){
  
  img = loadImage("water.jpg");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
}

function draw() {
  background(190,190, 250);
  
  fill(50,190,90);
  ellipse(100, -100, 100);

   texture(img);
   stroke(50,30,190);
  
  let wingInc = map(sin(angle), -1, 1, -5,5);
  
  tip1y+= wingInc/4;
  tip2y+= wingInc/4; 
  
  //x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4
   curve(-320,-40, 0, -180, tip1y, 0, -100, -130, 0, -50, 60, 0);
  curve(0, 0, 0, -100, -130, 0, -20, tip2y, 0, 200, -100,0);
   //curve(-280,-40,-110, 30,-10,-30,10,60);
  
  
  
 translate(-250,200,-100);
  
  
  for(let j =0; j < 500/r; j++){
    for(let i = 0; i < 500/r; i++){
  
     let xAngle =   map(0, 0, width, -TWO_PI, TWO_PI);
      let yAngle =  map(0, 0, height, -TWO_PI, TWO_PI); 
      
    let angle = xAngle* i/width + yAngle * j/height;
   //    let angle = i/width + j/height;
        
    let x = r * cos(TWO_PI * 6 * angle + t);
    let y = r * sin(TWO_PI *  6 * angle + t);
  
    let colorVal = map(angle, -0.8, 0.3, 0, 255);  
      
  // stroke(250, 50);
   noStroke()
      // fill(colorVal, 200, 150, 50);
    texture(img);
      ellipse(r * i + x, r * j + y, r*5);
  

    noStroke();  
   // stroke(60);  
    noFill();
    ellipse(r * i, r * j, r*2);
    }
  }
    
t+=0.01;
  angle+=0.02;
}

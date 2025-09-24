/**
 * Making Pippin's Mr. Furious Very Mad
 * Anna Tsirbas
 *
 * Make A guy who becomes visibly furious, very furious!
 */

"use strict";

let bird = {
pos: {
x: 100,
y: 100,
  },
//Colour
fill: {
r: 70,
g: 70,
b: 255,
},
stroke: {
r: 255,
g: 255,
b: 255,
},
bodySize: {
x: 40,
y: 20,
},
wingSize: {
x: 15,
y: 40,
},
beakSize: {
x: 10,
y: 3,
},
beakFill: {
r: 252,
g: 115,
b: 3,
  },
//Speed
velocity: 1
}

let movingToRight = true;

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225,
  },
};

let skyBackground = {
  skyRed: 173,
  skyGreen: 216,
  skyBlue: 230,
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(
    skyBackground.skyRed,
    skyBackground.skyGreen,
    skyBackground.skyBlue
  );

drawBird();
if(movingToRight)
{
birdMoveR();
if(bird.pos.x >= 300)
{
movingToRight = false;
}
}
  
else if(!movingToRight)
{
birdMoveL();
if(bird.pos.x <= 100)
{
movingToRight = true;
}
}

  // Make Mr.Furious red from rage!
  push();
  mrFurious.fill.b = mrFurious.fill.b - 0.75;
  mrFurious.fill.g = mrFurious.fill.g - 0.75;
  pop();

  //Make Mr.Furious shake from rage!
  mrFurious.x = mrFurious.x + 1;

  if (mrFurious.x == 210) {
    mrFurious.x = mrFurious.x - 5;
  }
  else if (mrFurious.x == 200) {
    mrFurious.x = mrFurious.x + 5;
  }

  

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
  push();
  stroke(5);

  // Mr.Furious' Glare
  arc(mrFurious.x - 20, mrFurious.y - 20, 15, 15, 0, PI, OPEN);
  arc(mrFurious.x - 1, mrFurious.y - 20, 15, 15, 0, PI, OPEN);
  // Mr.Furious' Frown
  arc(mrFurious.x - 10, mrFurious.y + 5, 15, 15, PI, 0, OPEN);
  pop();
  // Mr.Furious' Body
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b,);
  rect(mrFurious.x - 18, mrFurious.y + 40, 35, 80);
  // Mr.Furious' Legs
  rect(mrFurious.x - 18, mrFurious.y + 120, 10, 20);
  rect(mrFurious.x + 7, mrFurious.y + 120, 10, 20);
  pop();

  //Sky goes from Day to Night
  push();
  skyBackground.skyRed = skyBackground.skyRed - 1;
  skyBackground.skyGreen = skyBackground.skyGreen - 1;
  skyBackground.skyBlue = skyBackground.skyBlue - 1;
  pop();
}

// Draw the bird
function drawBird(){
//draw the bird's body
push();
fill(bird.fill.r, bird.fill.g, bird.fill.b);
noStroke();
ellipse(bird.pos.x, bird.pos.y,bird.bodySize.x, bird.bodySize.y);
//draw the bird's wings
push();
fill(bird.fill.r, bird.fill.g, bird.fill.b);
noStroke();
ellipse(bird.pos.x, bird.pos.y, bird.wingSize.x, bird.wingSize.y);
//draw the bird's beak
push();
noStroke();
fill(bird.beakFill.r, bird.beakFill.g, bird.beakFill.b);
ellipse(bird.pos.x+20, bird.pos.y, bird.beakSize.x, bird.beakSize.y);
pop();
pop();
pop();
//draw the bird's eyes
ellipse(bird.pos.x+10,bird.pos.y+3,3);
ellipse(bird.pos.x + 10, bird.pos.y - 3, 3);
  

}

//move the bird right
function birdMoveR (){
bird.velocity += .15;
bird.velocity = constrain(bird.velocity, -2, 2);
bird.pos.x += bird.velocity;
}
//move the bird left
function birdMoveL (){
bird.velocity -= .15;
bird.velocity = constrain(bird.velocity, -2, 2);
bird.pos.x += bird.velocity;
}


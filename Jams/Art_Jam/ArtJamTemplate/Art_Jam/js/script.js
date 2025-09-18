/**
 * A Perfect Day
 * Anna Tsirbas
 *
 * Find Anna's perfect day! Flip three cards face up to reveal Anna's task for the day!
 * The cards can either have her perfect pastimes or her dreaded duties! But BEWARE!
 * With every terrible task, Anna loses a life! Pick wisely or be at risk of causing her demise!
 * (Disheartening in the face of Responsiblities </3)
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 */

// Cards
let cardBack = {
  //Position and Size
  cardX: 50,
  cardY: 50,
  cardW: 150,
  cardH: 300,
  //Colour Card
  fill: {
    cardbackR: 65,
    cardbackG: 0,
    cardbackB: 243,
  },
};

let cardFace = {
  //Colour Card
  fill: {
    cardfaceR: 255,
    cardfaceG: 255,
    cardfaceB: 255,
  },
};

// Anna's Lives
let heart = {
    // Ellipse Size
    ellipseSize: {
        w: 10,
        h: 10,
    },
    //Ellipse 1 Position
  ellipseOne: {
    x: 325,
    y: 400,
  },
  // Ellipse 2 Position
  ellipseTwo: {
    x: 335,
    y: 400,
  },
  // Triangle Position
  triPos: {
    xOne: 320,
    yOne: 402,
    xTwo: 340,
    yTwo: 402,
    xThree: 330,
    yThree: 420,
  },
  //Heart Colour
  fill: {
    r: 255,
    g: 255,
    b: 255,
  },
};

function setup() {
  //Create Canvas
  createCanvas(650, 450);
  background(192, 234, 240);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function draw() {
  // Left Card Back
  push();
  noStroke();
  fill(
    cardBack.fill.cardbackR,
    cardBack.fill.cardbackG,
    cardBack.fill.cardbackB
  );
  rect(cardBack.cardX, cardBack.cardY, cardBack.cardW, cardBack.cardH);
  pop();

  // Left Card Face
  push();
  noStroke();
  fill(
    cardFace.fill.cardfaceR,
    cardFace.fill.cardfaceG,
    cardFace.fill.cardfaceB
  );
  rect(cardBack.cardX, cardBack.cardY, cardBack.cardW, cardBack.cardH);
  pop();

  // Middle Card Back
  push();
  noStroke();
  fill(
    cardBack.fill.cardbackR,
    cardBack.fill.cardbackG,
    cardBack.fill.cardbackB
  );
  rect(cardBack.cardX + 200, cardBack.cardY, cardBack.cardW, cardBack.cardH);
  pop();

  // Middle Card Face
  push();
  noStroke();
  fill(
    cardFace.fill.cardfaceR,
    cardFace.fill.cardfaceG,
    cardFace.fill.cardfaceB
  );
  rect(cardBack.cardX + 200, cardBack.cardY, cardBack.cardW, cardBack.cardH);
  pop();

  // Right Card Back
  push();
  noStroke();
  fill(
    cardBack.fill.cardbackR,
    cardBack.fill.cardbackG,
    cardBack.fill.cardbackB
  );
  rect(cardBack.cardX + 400, cardBack.cardY, cardBack.cardW, cardBack.cardH);
  pop();

  // Right Card Face
  push();
  noStroke();
  fill(
    cardFace.fill.cardfaceR,
    cardFace.fill.cardfaceG,
    cardFace.fill.cardfaceB
  );
  rect(cardBack.cardX + 400, cardBack.cardY, cardBack.cardW, cardBack.cardH);
  pop();

  // Draw Hearts
  push();
  noStroke();
  fill(heart.fill.r, heart.fill.g, heart.fill.b);
    ellipse(heart.ellipseOne.x, heart.ellipseOne.y, heart.ellipseSize.w, heart.ellipseSize.h);
    ellipse(heart.ellipseTwo.x, heart.ellipseTwo.y, heart.ellipseSize.w, heart.ellipseSize.h);
    triangle(
        heart.triPos.xOne,
        heart.triPos.yOne,
        heart.triPos.xTwo,
        heart.triPos.yTwo,
        heart.triPos.xThree,
        heart.triPos.yThree);
    pop();
}

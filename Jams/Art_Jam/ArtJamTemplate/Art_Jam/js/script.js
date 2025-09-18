/**
 * A Perfect Day
 * Anna Tsirbas
 *
 * Find Anna's perfect day! Flip three cards face up to reveal Anna's task for the day!
 * The cards can either have her perfect pastimes or her dreaded duties! But BEWARE!
 * With every terrible task, Anna loses a life! Pick wisely or be at risk of causing her demise!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 */

// Card
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
  fill(255);
  rect(cardBack.cardX, cardBack.cardY, cardback.cardW, cardBack.cardH);
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
  fill(255);
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
  fill(255);
  rect(cardBack.cardX + 400, cardBack.cardY, cardBack.cardW, cardBack.cardH);
  pop();
}

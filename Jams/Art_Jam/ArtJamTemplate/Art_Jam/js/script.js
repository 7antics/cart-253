/**
 * A Perfect Day
 * Anna Tsirbas
 *
 * Find Anna's perfect day! Flip three cards face up to reveal Anna's task for the day!
 * The cards can either have her perfect pastimes or her dreaded duties! But BEWARE!
 * By choosing a terrible task, Anna's perfect day will be at peril! Pick wisely or be at risk of causing her demise!
 * (Becoming disheartended in the face of Responsiblities </3)
 */

"use strict";

/**
 */

// Card Properties
let cardBackLeft = {
  //Position and Size
  cardX: 50,
  cardY: 50,
  cardW: 150,
  cardH: 300,
  //Card Back Colour
  fill: {
    cardBackFill: "#4100F3",
    cardFaceFill: "#FFFFFF",
  },
};

let cardBackMiddle = {
  //Position and Size
  cardX: 250,
  cardY: 50,
  cardW: 150,
  cardH: 300,
  //Card Back Colour
  fill: {
    cardBackFill: "#4100F3",
    cardFaceFill: "#FFFFFF",
  },
};

let cardBackRight = {
  //Position and Size
  cardX: 450,
  cardY: 50,
  cardW: 150,
  cardH: 300,
  //Card Back Colour
  fill: {
    cardBackFill: "#4100F3",
    cardFaceFill: "#FFFFFF",
  },
};
//Card result 1
let leftCardOpOne = {
  x: 125,
  y: 195,
  size: 50,
  fill: (255, 0, 0),
};

//Card result 2
let leftCardOpTwo = {
  x: 125,
  y: 195,
  size: 50,
  fill: (150, 0, 0),
};

//Card result 3
let leftCardOpThree = {
  x: 125,
  y: 195,
  size: 50,
  fill: (125, 0, 0),
};

//Card result 4
let leftCardOpFour = {
  x: 125,
  y: 195,
  size: 50,
  fill: (100, 0, 0),
};

//Card result 5
let leftCardOpFive = {
  x: 125,
  y: 195,
  size: 50,
  fill: (75, 0, 0),
};

//Card result 6
let leftCardOpSix = {
  x: 125,
  y: 195,
  size: 50,
  fill: (50, 0, 0),
};

// Heart Properties
let heartLeft = {
  // Ellipse Size
  ellipseSize: {
    w: 10,
    h: 10,
  },
  //Ellipse 1 Position
  ellipseOne: {
    x: 275,
    y: 400,
  },
  // Ellipse 2 Position
  ellipseTwo: {
    x: 285,
    y: 400,
  },
  // Triangle Position
  triPos: {
    xOne: 270,
    yOne: 402,
    xTwo: 290,
    yTwo: 402,
    xThree: 280,
    yThree: 420,
  },
  //Heart Colour
  fill: "#FFFFFF",
  fills: {
    base: "#FFFFFF",
    good: "#FF0000",
    bad: "#808080",
  },
};

let heartMiddle = {
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
  fill: "#FFFFFF",
  fills: {
    base: "#FFFFFF",
    good: "#FF0000",
    bad: "#808080",
  },
};

let heartRight = {
  // Ellipse Size
  ellipseSize: {
    w: 10,
    h: 10,
  },
  //Ellipse 1 Position
  ellipseOne: {
    x: 375,
    y: 400,
  },
  // Ellipse 2 Position
  ellipseTwo: {
    x: 385,
    y: 400,
  },
  // Triangle Position
  triPos: {
    xOne: 370,
    yOne: 402,
    xTwo: 390,
    yTwo: 402,
    xThree: 380,
    yThree: 420,
  },
  //Heart Colour
  fill: "#FFFFFF",
  fills: {
    base: "#FFFFFF",
    good: "#FF0000",
    bad: "#808080",
  },
};

function setup() {
  //Create Canvas
  createCanvas(650, 450);
  background(192, 234, 240);
}

function draw() {
  writeText();
  drawCardBack();
  drawHearts();
  drawResults();
  display();
}

function writeText() {
  push();
  //Colour of Text
  fill("#FFFFFF");
  //Size of text
  textSize(20);
  //Alignment of text
  textAlign(CENTER, CENTER);
  //Style of text
  textStyle(BOLDITALIC);
  //What the text says
  text("Pick a card to make Anna's Perfect Day!", width / 2, 25);
  pop();
}

function drawCardBack() {
  // Left Card Back
  push();
  noStroke();
  fill(cardBackLeft.fill.cardBackFill);
  rect(
    cardBackLeft.cardX,
    cardBackLeft.cardY,
    cardBackLeft.cardW,
    cardBackLeft.cardH
  );
  pop();

  // Middle Card Back
  push();
  noStroke();
  fill(cardBackMiddle.fill.cardBackFill);
  rect(
    cardBackMiddle.cardX,
    cardBackMiddle.cardY,
    cardBackMiddle.cardW,
    cardBackMiddle.cardH
  );
  pop();

  // Right Card Back
  push();
  noStroke();
  fill(cardBackRight.fill.cardBackFill);
  rect(
    cardBackRight.cardX,
    cardBackRight.cardY,
    cardBackRight.cardW,
    cardBackRight.cardH
  );
  pop();
}

function drawHearts() {
  // Draw Hearts
  // Left Heart
  push();
  noStroke();
  fill(heartLeft.fill);
  ellipse(
    heartLeft.ellipseOne.x,
    heartLeft.ellipseOne.y,
    heartLeft.ellipseSize.w,
    heartLeft.ellipseSize.h
  );
  ellipse(
    heartLeft.ellipseTwo.x,
    heartLeft.ellipseTwo.y,
    heartLeft.ellipseSize.w,
    heartLeft.ellipseSize.h
  );
  triangle(
    heartLeft.triPos.xOne,
    heartLeft.triPos.yOne,
    heartLeft.triPos.xTwo,
    heartLeft.triPos.yTwo,
    heartLeft.triPos.xThree,
    heartLeft.triPos.yThree
  );
  pop();

  //Middle Heart
  push();
  noStroke();
  fill(heartMiddle.fill);
  ellipse(
    heartMiddle.ellipseOne.x,
    heartMiddle.ellipseOne.y,
    heartMiddle.ellipseSize.w,
    heartMiddle.ellipseSize.h
  );
  ellipse(
    heartMiddle.ellipseTwo.x,
    heartMiddle.ellipseTwo.y,
    heartMiddle.ellipseSize.w,
    heartMiddle.ellipseSize.h
  );
  triangle(
    heartMiddle.triPos.xOne,
    heartMiddle.triPos.yOne,
    heartMiddle.triPos.xTwo,
    heartMiddle.triPos.yTwo,
    heartMiddle.triPos.xThree,
    heartMiddle.triPos.yThree
  );

  //Right Heart
  push();
  noStroke();
  fill(heartRight.fill);
  ellipse(
    heartRight.ellipseOne.x,
    heartRight.ellipseOne.y,
    heartRight.ellipseSize.w,
    heartRight.ellipseSize.h
  );
  ellipse(
    heartRight.ellipseTwo.x,
    heartRight.ellipseTwo.y,
    heartRight.ellipseSize.w,
    heartRight.ellipseSize.h
  );
  triangle(
    heartRight.triPos.xOne,
    heartRight.triPos.yOne,
    heartRight.triPos.xTwo,
    heartRight.triPos.yTwo,
    heartRight.triPos.xThree,
    heartRight.triPos.yThree
  );
  pop();
}

function drawResults() {
  push();
  fill (leftCardOpOne.fill);
  ellipse(leftCardOpOne.x, leftCardOpOne.y, leftCardOpOne.size);
  pop();

  push();
  fill(leftCardOpTwo.fill);
  ellipse(leftCardOpTwo.x, leftCardOpTwo.y, leftCardOpTwo.size);
  pop();

  push();
  fill(leftCardOpThree.fill);
  ellipse(leftCardOpThree.x, leftCardOpThree.y, leftCardOpThree.size);
  pop();

  push();
  fill(leftCardOpFour.fill);
  ellipse(leftCardOpFour.x, leftCardOpFour.y, leftCardOpFour.size);
  pop();

  push();
  fill(leftCardOpFive.fill);
  ellipse(leftCardOpFive.x, leftCardOpFive.y, leftCardOpSix.size);
  pop();

}

function display() {
  //Left card constraints for when mouse is in card coordinates
  let overlapsCardLeft = false;

  if (
    mouseX > cardBackLeft.cardX &&
    mouseX < cardBackLeft.cardX + cardBackLeft.cardW
  ) {
    if (
      mouseY > cardBackLeft.cardY &&
      mouseY < cardBackLeft.cardY + cardBackLeft.cardH
    ) {
      overlapsCardLeft = true;
    }
  }

  //Middle Card constraints for when mouse is in card coordinates
  let overlapsCardMiddle = false;

  if (
    mouseX > cardBackMiddle.cardX &&
    mouseX < cardBackMiddle.cardX + cardBackMiddle.cardW
  ) {
    if (
      mouseY > cardBackMiddle.cardY &&
      mouseY < cardBackMiddle.cardY + cardBackMiddle.cardH
    ) {
      overlapsCardMiddle = true;
    }
  }

  //Right Card constraints for when mouse is in card coordinates
  let overlapsCardRight = false;

  if (
    mouseX > cardBackRight.cardX &&
    mouseX < cardBackRight.cardX + cardBackRight.cardW
  ) {
    if (
      mouseY > cardBackRight.cardY &&
      mouseY < cardBackRight.cardY + cardBackRight.cardH
    ) {
      overlapsCardRight = true;
    }
  }

  //If mouse clicks Left card back, card back changes colour to card face colour
  if (overlapsCardLeft && mouseIsPressed) {
    cardBackLeft.fill.cardBackFill = cardBackLeft.fill.cardFaceFill;
  }

  //If mouse click Middle card back, card back changes colour to card face colour
  if (overlapsCardMiddle && mouseIsPressed) {
    cardBackMiddle.fill.cardBackFill = cardBackMiddle.fill.cardFaceFill;
  }

  //If mouse clicks Right card back, card back changes colour to card face colour
  if (overlapsCardRight && mouseIsPressed) {
    cardBackRight.fill.cardBackFill = cardBackRight.fill.cardFaceFill;
  }
  //When cardback changes to card face, introduce card result
}

//when card result appears, change colour of heart

//Once heart colour changes, reset card backs

//Once all three hearts are full, display end scene

//If all three red hearts display "End Scene One/WAHOO!"

//If two red hearts display "End Scene Two/MEH."

//If one red heart display "End Scene Three/WOMPWOMP!"

//If no red hearts display "End Scene Four/WAH!"

/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let cardBack = {
    //Position and Size
    cardX: 50,
    cardY: 50,
    cardW: 150,
    cardH: 300,
}

function setup() {

//Create Canvas
createCanvas(600, 500,);
background(192, 234, 240);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    // Card Back 1
    push();
    noStroke();
    rect(cardBack.cardX, cardBack.cardY, cardBack.cardW, cardBack.cardH);
    pop();

     // Card Back 2
    push();
    noStroke();
    rect(cardBack.cardX, cardBack.cardY, cardBack.cardW, cardBack.cardH);
    pop();
}
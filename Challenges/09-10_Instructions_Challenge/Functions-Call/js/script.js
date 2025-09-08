/**
 * Instructions Challenge
 * 
 * Anna Tsirbas
 * 
 *Creating an immersive nighttime landscape. 
 */

"use strict";

/**
 * Creating a canvas for my landscape.
*/
function setup() {
    createCanvas(640, 480);
    noStroke();
}


/**
 * A landscape.
*/
function draw() {
    background(100, 100, 255);
    push();
    fill(1, 50, 32);
    rect(0, 400, 640, 80);
    pop();

    //Star 1
    triangle(30, 10, 20, 25, 40, 25);
    triangle(30, 30, 20, 15, 40, 15);
    //Star 2
    triangle(100, 80, 90, 95, 110, 95);
    triangle(100, 100, 90, 85, 110, 85);
    //Star 3
    triangle(50, 140, 40, 155, 60, 155);
    triangle(50, 160, 40, 145, 60, 145);
    //Star 4
    triangle(150, 10, 140, 25, 160, 25);
    triangle(150, 30, 140, 15, 160, 15);
    //Star 5
    triangle(250, 60, 240, 75, 260, 75);
    triangle(250, 80, 240, 65, 260, 65);
    //Star 6
    triangle(310, 50, 300, 65, 320, 65);
    triangle(310, 70, 300, 55, 320, 55);
    //Star 7
    triangle(200, 180, 190, 195, 210, 195);
    triangle(200, 200, 190, 185, 210, 185);
    //Star 8
    triangle(320, 140, 310, 155, 330, 155);
    triangle(320, 160, 310, 145, 330, 145);
    //Star 9
    triangle(420, 110, 410, 125, 430, 125);
    triangle(420, 130, 410, 115, 430, 115);

}
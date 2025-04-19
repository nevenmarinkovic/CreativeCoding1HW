var x = 50;
var y = 50;
var diameter = 25;

var mouseClicked = false;
var mousex = 0;
var mousey = 0;

//Square obstacle variables
var squareX = 200;
var squareY = 200;
var squareSize = 50;
var squareXMovement = (Math.floor(Math.random() * 7) + 1);
var squareYMovement = (Math.floor(Math.random() * 7) + 1);

//Rectangle obstacle variables
var rectX = 500;
var rectY = 300;
var rectXMovement = (Math.floor(Math.random() * 7) + 1);
var rectYMovement = (Math.floor(Math.random() * 7) + 1);

function setup() 
{
    createCanvas(800, 600);
}

function draw() 
{
    background(0);
    createBorders();
    createPlayer();

    generateExit();
    youWinMessage();
    
    //Create two obstacles of different sizes and colors
    createSquare();
    createRectangle();

    //These different functions to move each of the obstacles around randomly around the screen. If they leave the screen, have them come back on the other side.
    squareMovement();
    rectangleMovement();  

    //I want to draw a circle at the mouse position when the mouse is clicked
    mC();
    
    
}

//Create a function to generate a borders around the screen.
function createBorders()
{
    fill(255, 204, 0);
    rect(0, 0, width, 20); // Top border
    rect(0, height - 20, width, 20); // Bottom border
    rect(0, 0, 20, height); // Left border
    rect(width - 20, 0, 20, height); // Right border
}

function mC()
{
    if (mouseClicked) 
        {
            fill(255, 0, 100);
            circle(mousex, mousey, diameter * 2);
            //If the mouse is clicked, draw a circle at the mouse position
        }
}

function mousePressed() 
{  
    if(!mouseClicked) 
    {
        mouseClicked = true;
        mousex = mouseX;
        mousey = mouseY;
    }

}


//Function that moves the circle when pressing the keys 'w', 'a', 's', and 'd'.
function keyPressed() 
{
    if (key == 'd') 
    {
    x += 20;
    } 
    else if (key == 'a') 
    {
    x -= 20;
    }
    else if( key == 's') 
    {
    y += 20;
    }
    else if (key == 'w') 
    {
    y -= 20;
    }
}

function createPlayer()
{
    fill(24, 200, 29);
    circle(x, y, diameter);
}

function createSquare()
{
    //Create obstacles of different sizes and colors
    fill(255, 0, 0);
    rect(squareX, squareY, squareSize, squareSize);
    squareX += squareXMovement;
    squareY += squareYMovement;
}

function createRectangle()
{
    fill(0, 0, 255);
    rect(rectX, rectY, 75, 205);
    rectX -= rectXMovement;
    rectY -= rectYMovement;
}

function squareMovement()
{
    //If the square moves off the right side of the screen, have it come out the left side of the screen
    if (squareX > width) 
        {
            squareX = 0; // Reverse direction on x-axis
            squareY = Math.floor(Math.random() * height); // Randomize y position
            //randomize direction of square movement coming off the opposite side
            squareXMovement = (Math.floor(Math.random() * 7) + 1); // Randomize x movement
            squareYMovement = (Math.floor(Math.random() * 7) + 1); // Randomize y movement
        }
        else if(squareX < 0) 
        {
            squareX = width; // Reverse direction on x-axis
            squareY = Math.floor(Math.random() * height); // Randomize y position
            squareXMovement = (Math.floor(Math.random() * 7) + 1); // Randomize x movement
            squareYMovement = (Math.floor(Math.random() * 7) + 1); // Randomize y movement
        }
        //If the square moves off the bottom side of the screen, have it come out the top side of the screen
        if (squareY > height) 
        {
            squareY = 0; // Reverse direction on y-axis
            squareX = Math.floor(Math.random() * width); // Randomize x position
            squareXMovement = (Math.floor(Math.random() * 7) + 1); // Randomize x movement
            squareYMovement = (Math.floor(Math.random() * 7) + 1); // Randomize y movement
        }
        else if(squareY < 0) 
        {
            squareY = height; // Reverse direction on y-axis
            squareX = Math.floor(Math.random() * width); // Randomize x position
            squareXMovement = (Math.floor(Math.random() * 7) + 1); // Randomize x movement
            squareYMovement = (Math.floor(Math.random() * 7) + 1); // Randomize y movement
        }
}

function rectangleMovement()
{
    //If the square moves off the right side of the screen, have it come out the left side of the screen
    if (rectX > width) 
        {
            rectX = 0; // Reverse direction on x-axis
            rectY = Math.floor(Math.random() * height); // Randomize y position
            //randomize direction of square movement coming off the opposite side
            rectXMovement = (Math.floor(Math.random() * 7) + 1); // Randomize x movement
            rectYMovement = (Math.floor(Math.random() * 7) + 1); // Randomize y movement
        }
        else if(rectX < 0) 
        {
            rectX = width; // Reverse direction on x-axis
            rectY = Math.floor(Math.random() * height); // Randomize y position
            rectXMovement = (Math.floor(Math.random() * 7) + 1); // Randomize x movement
            rectYMovement = (Math.floor(Math.random() * 7) + 1); // Randomize y movement
        }
        //If the square moves off the bottom side of the screen, have it come out the top side of the screen
        if (rectY > height) 
        {
            rectY = 0; // Reverse direction on y-axis
            rectX = Math.floor(Math.random() * width); // Randomize x position
            rectXMovement = (Math.floor(Math.random() * 7) + 1); // Randomize x movement
            rectYMovement = (Math.floor(Math.random() * 7) + 1); // Randomize y movement
        }
        else if(rectY < 0) 
        {
            rectY = height; // Reverse direction on y-axis
            rectX = Math.floor(Math.random() * width); // Randomize x position
            rectXMovement = (Math.floor(Math.random() * 7) + 1); // Randomize x movement
            rectYMovement = (Math.floor(Math.random() * 7) + 1); // Randomize y movement
        }
}

function generateExit()
{
    //create a small exit gate with two small rectangles on the right side of the screen
    fill(255, 0, 0);
    rect(780, 200, 10, 100);
    rect(780, 350, 10, 100);
}

function youWinMessage()
{
    //If the green circle moves through the gate, write a text message on the screen
    if (x >= 790 && (y >= 330 && y <= 350)) 
        {
            fill(255, 255, 0);
            textSize(32);
            text("Congrats, you made it!", 300, 100);
        }
}
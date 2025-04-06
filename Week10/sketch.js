var size = 20;
var textDirection = 1; // 1 for increasing, -1 for decreasing
var X = 350;
var buttonX = 350;
var buttonY = 240;
var rightEyeY = 75;

var leftEyeX = 310;
var leftEyeY = 75;

var leftEyeMovementX = (Math.floor(Math.random() * 5) + 1);
var leftEyeYMovement = (Math.floor(Math.random() * 5) + 1);
var leftEyeYDirection = -1; // 1 for down, -1 for up
var leftEyeXDirection = -1; // 1 for right, -1 for left

var rightEyeYMovement = (Math.floor(Math.random() * 5) + 1);
var rightEyeYDirection = -1; // 1 for down, -1 for up

var buttonYMovement = (Math.floor(Math.random() * 5) + 1);
var buttonYDirection = 1; // 1 for down, -1 for up

var buttonMovement = (Math.floor(Math.random() * 5) + 1); 
var buttonDirection = -1; // 1 for right, -1 for left

var headMovement = (Math.floor(Math.random() * 5) + 1); 
var headDirection = 1; // 1 for right, -1 for left


function setup()
{
    createCanvas(600, 600);
}



function draw()
{
    background(191,215,234);

    textSize(size);
    text("Neven in shapes!", 10,80);
    size += .25 * textDirection;
    if(size == 70 || size == 20)
    {
        textDirection *= -1; // Reverse the direction of the text size change
    }


    //Head, eyes, nose, mouth
    fill(245, 228, 187);

    //Move the head left and right along the x axis
    circle(X,100, 175);
    X += headMovement*headDirection; // Move the head to the right
    if(X > 600 || X < 0)
    {
        headDirection *= -1; // Reset the position when it goes off screen
    }
    
    line(305,60,315,60);
    line(380,60,390,60);
    strokeWeight(10);
    fill(0);


    point(leftEyeX,leftEyeY);
    leftEyeX += leftEyeMovementX*leftEyeXDirection; // Move the eye left and right
    leftEyeY += leftEyeYMovement*leftEyeYDirection; // Move the eye up and down
    if(leftEyeX > 600 || leftEyeX < 0)
    {
        leftEyeXDirection *= -1; // Reset the position when it goes off screen
    }
    if(leftEyeY > 100 || leftEyeY < 50)
    {
        leftEyeYDirection *= -1; // Reset the position when it goes off screen
    }

    point(385,rightEyeY);
    rightEyeY += rightEyeYMovement*rightEyeYDirection; // Move the eye up and down
    if(rightEyeY > 100 || rightEyeY < 50)
    {
        rightEyeYDirection *= -1; // Reset the position when it goes off screen
    }


    triangle(340,100,340,90,350,100);
    ellipse(345, 135, 70, 15)


    //Body, arms, legs
    fill(8, 126, 139);
    rect(300,185,100,200);
    fill(10, 24, 120);
    rect(400,195,50,10);
    rect(250,195,50,10);
    rect(300,385,10,60);
    rect(390,385,10,60);

    point(buttonX, 225);
    buttonX += buttonMovement*buttonDirection;
    if(buttonX > 600 || buttonX < 0)
    {
        buttonDirection *= -1; // Reset the position when it goes off screen
    }

    point(350, buttonY);
    buttonY += buttonYMovement*buttonYDirection;
    if(buttonY > 500 || buttonY < 100)
    {
        buttonYDirection *= -1; // Reset the position when it goes off screen
    }
    
    //fill(0);
    //textSize(30);
    //text("Neven Marinkovic",270,500 );


}
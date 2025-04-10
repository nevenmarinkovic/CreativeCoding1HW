var x = 50;
var y = 50;
var diameter = 25;

function setup() 
{
    createCanvas(800, 600);
}

function draw() 
{
    background(0);
    fill(24, 200, 29);
    circle(x, y, diameter);

    //Create obstacles of different sizes and colors
    fill(255, 0, 0);
    rect(200, 200, 50, 50);

    fill(0, 0, 255);
    rect(500, 300, 75, 205);

    fill(255, 255, 0);
    triangle(340,100,340,200,350,200);
}

function keyPressed() 
{
    if (key == 'd') 
    {
    x += 10;
    } 
    else if (key == 'a') 
    {
    x -= 10;
    }
    else if( key == 's') 
    {
    y += 10;
    }
    else if (key == 'w') 
    {
    y -= 10;
    }
}
function setup()
{
    createCanvas(600, 600);
}

function draw()
{
    background(191,215,234);
    textSize(22)
    text("Neven in shapes!", 10,80);


    //Head, eyes, nose, mouth
    fill(245, 228, 187);
    circle(350,100,175);
    line(305,60,315,60);
    line(380,60,390,60);
    strokeWeight(10);
    fill(0);
    point(310,75);
    point(385,75);
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
    point(350, 225);
    point(350, 240);
    
    fill(0);
    textSize(30);
    text("Neven Marinkovic",270,500 );


}
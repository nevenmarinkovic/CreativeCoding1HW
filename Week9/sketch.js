function setup()
{
    createCanvas(600, 600);
}

function draw()
{
    background(191,215,234);
    textSize(22)
    text("Myself in shapes!", 10,80);

    // head
    fill(245, 228, 187);
    circle(350,100,175);
   
    // eyes
    strokeWeight(10);
    fill(0);
    point(300,75);
    point(385,75);

    triangle(340,100,340,90,350,100);
    
    // mouth
    ellipse(345, 135, 70, 15)


    // body
    fill(8, 126, 139);
    rect(300,185,100,200);
    
    // right arm
    fill(10, 24, 120);
    rect(400,195,50,10);
    // left arm
    rect(250,195,50,10);
    // left leg
    rect(300,385,10,60);
    // right leg
    rect(390,385,10,60);
    
    fill(0);
    textSize(22);
    text("Neven Marinkovic",270,500 );


}
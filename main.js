function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide()
}

function take_snapshot(){
    save('snapshot.png')
}

function draw(){
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);


    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    rect(90, 40, 460, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);


    fill(0, 256, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    rect(90, 40, 460, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);


    fill(0, 64, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    rect(90, 40, 460, 20);
}
function preload() {

}

function setup() {
    canvas = createCanvas(640, 400);
    canvas.position(160, 300);
    video = createCapture(VIDEO);
    video.hide();
    tintColour = "";
    x=350;
}

function draw() {
    image(video, 20, 20, 600, 360);
    tint(tintColour);
    stroke("orange");
    fill("blue");
    rect(0, 10, 650, 15);
    rect(10, 0, 15, 650);
    rect(0, 375, 650, 15);
    rect(615, 0, 15, 650);
    stroke("blue");
    fill("orange");
    circle(20, 380, 40);
    circle(620, 20, 40);
    circle(620, 380, 40);
    circle(20, 20, 40);
}

function changeFilter() {
    tintColour = document.getElementById("input_colour").value;
    x=document.getElementById("x_position").value;

}

function take_snapshot() {
    save("rudransh.png");
}
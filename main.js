function preload() {}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,80, 40, 500, 400);
    fill("purple")
    stroke("blue")
    strokeWeight(6)
    circle(1, 1, 80, 100);
    circle(640, 1, 80, 100);
    circle(1, 480, 80, 100);
    circle(640, 480, 80, 100);
}
function take_snapshot() {
    save('pic.png');
}
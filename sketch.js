var video;
var video2;
var maskedVideo;
var maskImage;
var mask;

function preload() {
  video = createVideo(["assets/cut1.mp4"]);
  video.hide();
  video.size(640, 272);

  video2 = createVideo(["assets/cut2.mp4"]);
  video2.hide();
  video2.size(640, 272);

  maskImage = loadImage("assets/mask.png");
}

function setup() {
  createCanvas(640, 272);

  mask = createGraphics(width, height);
  mask.imageMode(CENTER);

  maskedVideo = video2.get();
  maskedVideo.mask(mask.get());

  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function togglePlaying() {
  video.loop();
  video.volume(0);

  video2.loop();
  video2.volume(0);
}

function draw() {
  video2.loadPixels();
  image(video, 0, 0, 640, 272);
  image(maskedVideo, 0, 0, 640, 272);

  if (touchStarted) {
    mask.image(maskImage, mouseX, mouseY, 100, 100);
  }
  maskedVideo = video2.get(0, 0, 640, 272);
  maskedVideo.mask(mask.get());
}

const s = (sketch) => {
  let vid;
  // let vid2;
  let cnv;
  let positions = [];

  sketch.setup = () => {
    cnv = sketch.createCanvas(240.75, 428);

    vid = sketch.createVideo([
      "https://cache-ssl.celtra.com/api//blobs/47ea1aec8c51e3bc212473961ece84676912f7e1f345c253d704d23d5ac7dafb/trench.mp4",
    ]);

    // vid2 = createVideo([
    //   "https://cache-ssl.celtra.com/api//blobs/849b44609dfb8b8ec66b5c3d0e53eb9a50a47d9ffda6d1c520a5d05def1005a9/craftsmanship.mp4",
    // ]);

    vid.hide();
    vid.size(240.75, 428);

    // vid2.hide();
    // vid2.size(240.75, 428);
  };

  sketch.draw = () => {
    // sketch.background(150);
    // push();
    // let s = "The quick brown fox jumped over the lazy dog.";
    // fill(50);
    // text(s, 10, 10, 70, 80);
    // pop();

    sketch.image(vid, 0, 0); // draw the video frame to canvas
    // image(vid2, 0, 0); // draw the video frame to canvas

    //Every frame of animation
    //Storing in that array, the mouse position
    // positions.push({ x: sketch.mouseX, y: sketch.mouseY });
    // sketch.colorMode(sketch.RGB, 255, 255, 255, 0);
    // sketch.noStroke();
    // var c = sketch.color(0, 0, 0, 0);
    // sketch.fill(c);

    // // var value = alpha(clr);
    // for (let i = 0; i < positions.length; i++) {
    //   let x = positions[i].x;
    //   let y = positions[i].y;
    //   // set(x, y, value);
    //   sketch.ellipse(x, y, 40, 40);
    // }
  };

  // loadPixels(); // Fill pixels array
  // var c = get(mouseX, mouseY);
  // var x = c[0];
  // var y = c[1];
  // var clr = color(0, 0, 0, 0);
  // var value = alpha(clr);

  // set(x, y, value);
  // updatePixels();
  // console.log(c[0], c[1], c[2], c[3]);

  sketch.mousePressed = () => {
    vid.loop(); // set the video to loop and start playing
    vid.volume(0);
    vid2.loop();
    vid2.volume(0);
  };
};

let myp5 = new p5(s);

// function mouseMoved(e) {
//   var x = e.clientX;
//   var y = e.clientY;
//   // vid.setAlpha(0);
//   loadPixels();
//   var col = vid.get(x, y);
//   console.log(col);
// }

const s2 = (sketch) => {
  let vid;
  // let vid2;
  let cnv;
  let positions = [];

  sketch.setup = () => {
    cnv = sketch.createCanvas(240.75, 428);

    // vid = sketch.createVideo([
    //   "https://cache-ssl.celtra.com/api//blobs/47ea1aec8c51e3bc212473961ece84676912f7e1f345c253d704d23d5ac7dafb/trench.mp4",
    // ]);

    vid2 = sketch.createVideo([
      "https://cache-ssl.celtra.com/api//blobs/849b44609dfb8b8ec66b5c3d0e53eb9a50a47d9ffda6d1c520a5d05def1005a9/craftsmanship.mp4",
    ]);

    // vid.hide();
    // vid.size(240.75, 428);

    vid2.hide();
    vid2.size(240.75, 428);
  };

  sketch.draw = () => {
    sketch.background(150);
    // push();
    // let s = "The quick brown fox jumped over the lazy dog.";
    // fill(50);
    // text(s, 10, 10, 70, 80);
    // pop();

    sketch.image(vid2, 0, 0); // draw the video frame to canvas
    // image(vid2, 0, 0); // draw the video frame to canvas

    //Every frame of animation
    //Storing in that array, the mouse position
    positions.push({ x: sketch.mouseX, y: sketch.mouseY });
    sketch.colorMode(sketch.RGB, 255, 255, 255, 0);
    sketch.noStroke();
    var c = sketch.color(0, 0, 0, 0);
    sketch.fill(c);

    // var value = alpha(clr);
    for (let i = 0; i < positions.length; i++) {
      let x = positions[i].x;
      let y = positions[i].y;
      // set(x, y, value);
      sketch.ellipse(x, y, 40, 40);
    }
  };

  // loadPixels(); // Fill pixels array
  // var c = get(mouseX, mouseY);
  // var x = c[0];
  // var y = c[1];
  // var clr = color(0, 0, 0, 0);
  // var value = alpha(clr);

  // set(x, y, value);
  // updatePixels();
  // console.log(c[0], c[1], c[2], c[3]);

  sketch.mousePressed = () => {
    // vid.loop(); // set the video to loop and start playing
    // vid.volume(0);
    vid2.loop();
    vid2.volume(0);
  };
};

let myp52 = new p5(s2);

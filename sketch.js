var sun;
var mercury;
var venus;
var earth;
var mars;
var jupiter;
var saturn;
var uranus;
var neptun;
var pluto;
var stars;

// MacBook Air Display:
let x_pixels = 1420;
let y_pixels = 790;

// 1080p:
// let x_pixels = 1900;
// let y_pixels = 960;

function setup() {
  createCanvas(x_pixels, y_pixels);
  stars = makeStars(50);

  sun = new Sun(width/2, height/2, 70);
  mercury = new Planet(sun.x, sun.y, 3, 255, 220, 0, 110);
  venus = new Planet(sun.x, sun.y, 4, 255, 220, 0, 130);
  earth = new Planet(sun.x, sun.y, 5, 0, 100, 255, 160);
  moon = new Moon(earth.x, earth.y, 2, 255, 255, 255, 30)
  mars = new Planet(sun.x, sun.y, 4, 255, 30, 0, 195);
  jupiter = new Planet(sun.x, sun.y, 30, 255, 220, 50, 250);
  saturn = new DiskPlanet(sun.x, sun.y, 20, 255, 250, 0, 360);
  uranus = new Planet(sun.x, sun.y, 12, 0, 120, 255, 450);
  neptun = new Planet(sun.x, sun.y, 10, 0, 10, 255, 490);
  pluto = new Planet(sun.x, sun.y, 2, 255, 200, 10, 560);

}

// Draw stars in the background:
function makeStars(amount) {
  var stars = [];

  for (i = 0; i < amount; i++) {
    var rand_x = floor(random(x_pixels)) + 1;
    var rand_y = floor(random(y_pixels)) + 1;
    var size = floor(random(3)) + 1;
    var star = new Star(rand_x, rand_y, size, 200, 255, 100);
    console.log("Created new star! " + (i + 1).toString());

    stars.push(star);
  }

  return stars;
}

function drawStars(stars) {
  for (i = 0; i < stars.length; i++) {
    console.log(stars[i].x)
    stars[i].show();
  }
}

function handlePlanets() {
  mercury.show();
  venus.show();
  earth.show();
  mars.show();
  jupiter.show();
  saturn.show();
  uranus.show();
  neptun.show();
  pluto.show();

  mercury.checkPosition(sun);
  venus.checkPosition(sun);
  earth.checkPosition(sun);
  mars.checkPosition(sun);
  jupiter.checkPosition(sun);
  saturn.checkPosition(sun);
  uranus.checkPosition(sun);
  neptun.checkPosition(sun);
  pluto.checkPosition(sun);
}


function handleMoons() {
  moon.show();
  moon.checkPosition(earth);
}


function draw() {
  background(51);
  drawStars(stars);
  sun.show();
  handlePlanets();
  handleMoons();
}

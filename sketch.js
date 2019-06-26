// MacBook Air Display:
// let x_pixels = 1420;
// let y_pixels = 790;

// 1080p:
let x_pixels = 1900;
let y_pixels = 980;

// Initialization of all objects of our solar system:
function setup() {
  createCanvas(x_pixels, y_pixels);
  stars = makeStars(70);

  sun = new Sun(width/2, height/2, 60);

  // INNER PLANETS:
  mercury = new Planet(sun.x, sun.y, 3, 255, 220, 0, 80, 0.015);
  venus = new Planet(sun.x, sun.y, 4, 255, 220, 0, 95, 0.013);
  earth = new Planet(sun.x, sun.y, 5, 0, 100, 255, 120, 0.011);
  moon = new Moon(earth.x, earth.y, 2, 255, 255, 255, 15, 0.015);

  mars = new Planet(sun.x, sun.y, 4, 255, 30, 0, 150, 0.009);
  phobos = new Moon(mars.x, mars.y, 2, 250, 200, 200, 12, 0.011);
  daimos = new Moon(mars.x, mars.y, 1, 255, 255, 255, 8, 0.015);

  // BELT:
  asteroids = makeBelt(100);

  // OUTER PLANETS:
  jupiter = new Planet(sun.x, sun.y, 20, 255, 220, 50, 250, 0.006);
  callisto = new Moon(jupiter.x, jupiter.y, 3, 250, 200, 200, 35, 0.01);
  ganymede = new Moon(jupiter.x, jupiter.y, 4, 250, 200, 200, 40, 0.012);
  europa = new Moon(jupiter.x, jupiter.y, 2, 250, 200, 200, 45, 0.01);
  io = new Moon(jupiter.x, jupiter.y, 1, 250, 200, 0, 50, 0.009);


  saturn = new DiskPlanet(sun.x, sun.y, 14, 255, 250, 0, 320, 0.005);
  uranus = new DiskPlanet(sun.x, sun.y, 12, 0, 120, 255, 380, 0.004);
  neptun = new Planet(sun.x, sun.y, 10, 0, 10, 255, 450, 0.003);
  pluto = new Planet(sun.x, sun.y, 2, 255, 200, 10, 480, 0.002);

}

// Draw stars in the background:
function makeStars(amount) {
  var stars = [];

  for (i = 0; i < amount; i++) {
    var rand_x = floor(random(x_pixels)) + 1;
    var rand_y = floor(random(y_pixels)) + 1;
    var size = floor(random(3)) + 1;
    var star = new Star(rand_x, rand_y, size, 200, 255, 200);
    console.log("Created new star! " + (i + 1).toString());
    stars.push(star);
  }
  return stars;
}

// Draw stars in the background:
function makeBelt(amount) {
  var belt = [];

  for (i = 0; i < amount; i++) {
    var rand_x = floor(random(x_pixels)) + 1;
    var rand_y = floor(random(y_pixels)) + 1;
    var size = floor(random(2)) + 1;
    var distance = floor(random() * (200 - 180)) + 180;

    var asteroid = new Planet(sun.x, sun.y, size, 92, 64, 51, distance, 0.0005);
    console.log("Created new star! " + (i + 1).toString());
    belt.push(asteroid);
  }
  return belt;
}

// Draws multiple objects at once:
function drawStars(objects) {
  for (i = 0; i < objects.length; i++) {
    // console.log(objects[i].x)
    objects[i].show();
  }
}

// Draws multiple objects at once:
function drawBelt(objects) {
  for (i = 0; i < objects.length; i++) {
    // console.log(objects[i].x)
    objects[i].show();
    objects[i].checkPosition(sun);
  }
}

// Handles all planets:
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

// Handles all moons:
function handleMoons() {
  // EARTH MOONS:
  moon.show();
  moon.checkPosition(earth);

  // MARS MOONS:
  phobos.show();
  phobos.checkPosition(mars);
  daimos.show();
  daimos.checkPosition(mars);

  // JUPITER MOONS:
  callisto.show();
  callisto.checkPosition(jupiter);
  europa.show();
  europa.checkPosition(jupiter);
  ganymede.show();
  ganymede.checkPosition(jupiter);
  io.show();
  io.checkPosition(jupiter);
}

// The MAIN draw function:
function draw() {
  background(51);
  drawStars(stars);
  sun.show();
  handlePlanets();
  drawBelt(asteroids);
  handleMoons();
}

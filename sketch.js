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



function setup() {
  createCanvas(1900, 960);
  sun = new Sun(width/2, height/2, 70);
  mercury = new Planet(sun.x, sun.y, 2, 255, 220, 0, 80);
  venus = new Planet(sun.x, sun.y, 4, 255, 220, 0, 100);
  earth = new Planet(sun.x, sun.y, 5, 0, 100, 255, 130);
  mars = new Planet(sun.x, sun.y, 3, 255, 30, 0, 165);
  jupiter = new Planet(sun.x, sun.y, 30, 255, 220, 50, 250);
  saturn = new DiskPlanet(sun.x, sun.y, 20, 255, 250, 0, 360);
  uranus = new Planet(sun.x, sun.y, 10, 0, 120, 255, 450);
  neptun = new Planet(sun.x, sun.y, 9, 0, 10, 255, 490);
  pluto = new Planet(sun.x, sun.y, 1, 255, 220, 10, 560);

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


function draw() {
  background(51);
  sun.show();
  handlePlanets();

}

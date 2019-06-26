// A planet with some disks around it:
function DiskPlanet(x, y, r, red, green, blue, distance, velocity) {
  this.r = r;
  this.distance = distance;
  this.random_shift = floor(random(180));
  this.position = createVector(x + this.distance, y);
  this.radians = 0 + this.random_shift;
  this.velocity = velocity;

  this.red = red;
  this.green = green;
  this.blue = blue;

  this.show = function() {
    noStroke();
    fill(this.red-30, this.green-50, this.blue);      // First Ring (outer)
    ellipse(this.position.x, this.position.y, this.r*2+30, this.r*2+30);
    fill(51);                                         // First Gap (outer)
    ellipse(this.position.x, this.position.y, this.r*2+20, this.r*2+20);

    fill(this.red-30, this.green-50, this.blue);      // Second Ring (middle)
    ellipse(this.position.x, this.position.y, this.r*2+16, this.r*2+16);
    fill(51);                                         // Second Gap (middle)
    ellipse(this.position.x, this.position.y, this.r*2+10, this.r*2+10);

    fill(this.red, this.green, this.blue);            // The actual planet
    ellipse(this.position.x, this.position.y, this.r*2, this.r*2);
  }

  this.checkPosition = function(parent) {
    this.radians -= this.velocity;
    this.position.x = parent.x + Math.cos(this.radians) * this.distance;
    this.position.y = parent.y + Math.sin(this.radians) * this.distance;
  }
}

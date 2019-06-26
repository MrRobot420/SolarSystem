function DiskPlanet(x, y, r, red, green, blue, distance) {
  this.distance = distance;
  this.position = createVector(x + this.distance, y);
  this.velocity = createVector(-1,-1);
  this.r = r;

  this.red = red;
  this.green = green;
  this.blue = blue;

  this.show = function() {
    noStroke();
    this.position.add(this.velocity);
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
    if (this.position.x <= parent.x && this.position.y >= parent.y) {
      this.velocity.x = 1;
      this.velocity.y = 1;
    } else if (this.position.x >= parent.x && this.position.y >= parent.y) {
      this.velocity.x = 1;
      this.velocity.y = -1;
    } else if (this.position.x >= parent.x && this.position.y <= parent.y) {
      this.velocity.x = -1;
      this.velocity.y = -1;
    } else if (this.position.x <= parent.x && this.position.y <= parent.y) {
      this.velocity.x = -1;
      this.velocity.y = 1;
    }

    // this.checkPosition = function(parent) {
    //   if (this.position.x <= parent.x && this.position.y >= parent.y) {
    //     this.velocity.x = 1;
    //     this.velocity.y = 1;
    //   } else if (this.position.x >= parent.x && this.position.y >= parent.y) {
    //     this.velocity.x = 1;
    //     this.velocity.y = -1;
    //   } else if (this.position.x >= parent.x && this.position.y <= parent.y) {
    //     this.velocity.x = -1;
    //     this.velocity.y = -1;
    //   } else if (this.position.x <= parent.x && this.position.y <= parent.y) {
    //     this.velocity.x = -1;
    //     this.velocity.y = 1;
    //   }
  }
}

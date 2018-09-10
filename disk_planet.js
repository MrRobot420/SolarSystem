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
    fill(this.red-30, this.green-50, this.blue);
    ellipse(this.position.x, this.position.y, this.r*2+24, this.r*2+24);
    fill(51);
    ellipse(this.position.x, this.position.y, this.r*2+16, this.r*2+16);

    fill(this.red-30, this.green-50, this.blue);
    ellipse(this.position.x, this.position.y, this.r*2+14, this.r*2+14);
    fill(51);
    ellipse(this.position.x, this.position.y, this.r*2+6, this.r*2+6);
    fill(this.red, this.green, this.blue);
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

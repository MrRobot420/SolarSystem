// Should represent a moon that circles around a planet

function Moon(x, y, r, red, green, blue, distance) {
  this.r = r;
  this.distance = distance;
  this.position = createVector(x + this.distance, y);
  this.velocity = createVector(1,1);


  this.red = red;
  this.green = green;
  this.blue = blue;

  this.show = function() {
    noStroke();
    this.position.add(this.velocity);
    fill(this.red, this.green, this.blue);
    ellipse(this.position.x, this.position.y, this.r*2, this.r*2);
  }

  this.checkPosition = function(parent) {
    this.x_distance = this.position.x - parent.x;
    this.y_distance = this.position.y - parent.y;


    // if ()

    // if (parent.x >= 0) {
    //   this.x_distance = this.position.x + parent.x_distance;
    // } else {
    //   this.x_distance = this.position.x - parent.x_distance;
    // }
    //
    // if (parent.y >= 0) {
    //   this.y_distance = this.position.y + parent.y_distance;
    // } else {
    //   this.y_distance = this.position.y - parent.y_distance;
    // }


    if (this.x_distance >= this.distance) {
      this.velocity.x = -1;
    } else if (this.x_distance <= -this.distance) {
      this.velocity.x = 1;
    }

    if (this.y_distance >= this.distance) {
      this.velocity.y = -1;
    } else if (this.y_distance <= -this.distance) {
      this.velocity.y = 1;
    }
  }
}

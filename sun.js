// The center of our solar system:
function Sun(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;

  // SHOWS the object:
  this.show = function() {
    noStroke();
    fill(255, 176, 28);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}

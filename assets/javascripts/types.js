/* Types common to the whole game. */
/* CONSTANTS */
var BLOCK_WIDTH = 32,
    BLOCK_HEIGHT = 32
    BLOCK_BASE_SPEED = 1;

Direction = {
  LEFT: 0,
  UP: 1,
  RIGHT: 2,
  DOWN: 3
}

function Block (opts) {
  this.x = (opts.x) ? opts.x : (Math.random()*document.width), 
  this.y = (opts.y) ? opts.y : (Math.random()*document.height),
  this.width = BLOCK_WIDTH,
  this.height = BLOCK_HEIGHT,
  this.fillStyle = (opts.fillStyle) ? opts.fillStyle : '#282828'; /* must be a color or a gradient or a pattern */
  
  this.multiplier = 1;
  this.direction = (opts.direction) ? opts.direction : Direction.UP;
  this.move = function () {
    switch (this.direction) {
      case Direction.LEFT:
        this.x = this.x - BLOCK_BASE_SPEED*(this.multiplier);
        break;
      case Direction.UP:
        this.y = this.y - BLOCK_BASE_SPEED*(this.multiplier);
        break;
      case Direction.RIGHT:
        this.x = this.x + BLOCK_BASE_SPEED*(this.multiplier);
        break;
      case Direction.DOWN:
        this.y = this.y + BLOCK_BASE_SPEED*(this.multiplier);
        break;
      default:
        return false;
    }
  };
}
/* Types common to the whole game. */
/* CONSTANTS */
var BLOCK_WIDTH = 32,
    BLOCK_HEIGHT = 32,
    BLOCK_BASE_SPEED = 4,
    SNAKE_BASE_SPEED = 1,
    SNAKE_BASE_LOOPS_TO_MOVE = 20;
    SNAKE_BASE_LENGTH = 4;

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
  this.moves = (opts.moves) ? opts.moves : false,
  this.fillStyle = (opts.fillStyle) ? opts.fillStyle : '#282828'; /* must be a color or a gradient or a pattern */
  
  this.multiplier = 1;
  this.direction = (opts.direction) ? opts.direction : Direction.UP;
  this.move = function () {
    switch (this.direction) {
      case Direction.LEFT:
        this.x = this.x - BLOCK_WIDTH;//BLOCK_BASE_SPEED*(this.multiplier);
        break;
      case Direction.UP:
        this.y = this.y - BLOCK_HEIGHT;//BLOCK_BASE_SPEED*(this.multiplier);
        break;
      case Direction.RIGHT:
        this.x = this.x + BLOCK_WIDTH;//BLOCK_BASE_SPEED*(this.multiplier);
        break;
      case Direction.DOWN:
        this.y = this.y + BLOCK_HEIGHT;//BLOCK_BASE_SPEED*(this.multiplier);
        break;
      default:
        return false;
    }
  };
  
  this.render = function () {
          ctx.fillStyle = (this.fillStyle)? this.fillStyle : '#282828';
          ctx.beginPath();
          ctx.rect((this.x)? this.x : 0,
                   (this.y)? this.y : 0,
                   (this.width)? this.width : 0,
                   (this.height)? this.height : 0); /* make this handle different shapes, images, etc. */
          ctx.closePath();
          ctx.fill();
  };
}

function Snake (opts, blockopts) {
  this.blocks = (blockopts) ? [ new Block (blockopts) ] : [ new Block ({ moves: true }) ],
  this.speed = (opts.speed) ? opts.speed : SNAKE_BASE_SPEED,
  this.loops_to_move = (opts.loops) ? opts.loops : SNAKE_BASE_LOOPS_TO_MOVE,
  this.loops = 0;
  this.tail;
  this.direction = (opts.direction) ? opts.direction : Direction.UP;
  this.moves = true;
  this.move = function () {
    if(++this.loops >= this.loops_to_move) {
        for(var x = 0; x < this.speed; x++) {
          this.tail = this.blocks.pop();
          this.tail.x = this.blocks[0].x; this.tail.y = this.blocks[0].y; this.tail.direction = this.blocks[0].direction;
          this.preventOuroboros();
          this.tail.move();
          this.blocks.unshift(this.tail)
        }
        this.loops = 0;
    }
  };
  
  this.preventOuroboros = function () {
    if((this.tail.direction == Direction.LEFT && this.direction == Direction.RIGHT)
    || (this.tail.direction == Direction.UP && this.direction == Direction.DOWN)
    || (this.tail.direction == Direction.RIGHT && this.direction == Direction.LEFT)
    || (this.tail.direction == Direction.DOWN && this.direction == Direction.UP))
      return;
    else this.tail.direction = this.direction;
  };
  
  this.render = function () {
    this.blocks.forEach(function(e, i, a) {
      e.render();
    });
  }
  
  var size = (opts.size) ? opts.size : SNAKE_BASE_LENGTH;
  
  while(this.blocks.length < size) this.blocks.push (new Block( { x: this.blocks[this.blocks.length - 1].x, y: this.blocks[this.blocks.length - 1].y + BLOCK_HEIGHT, moves: true} ));
  
}
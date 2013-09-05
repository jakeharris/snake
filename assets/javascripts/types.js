/* Types common to the whole game. */
/* CONSTANTS */
var BLOCK_WIDTH = 32,
    BLOCK_HEIGHT = 32;

function Block (opts) {
  this.x = (opts.x) ? opts.x : (Math.random()*document.width), 
  this.y = (opts.y) ? opts.y : (Math.random()*document.height),
  this.width = BLOCK_WIDTH,
  this.height = BLOCK_HEIGHT,
  this.fillStyle = (opts.fillStyle) ? opts.fillStyle : '#282828'; /* must be a color or a gradient or a pattern */
      
}
var width = document.width,
    height = document.height,
    c = document.getElementById('c'),
    ctx = c.getContext('2d'),
    entities,
    game;

c.width = width;
c.height = height;

var clear = function () {
        if(width != document.width || height != document.height) {
          c.width = (width = document.width);
          c.height = (height = document.height);
        }
        ctx.fillStyle = '#d0e7f9';
        ctx.beginPath();
        ctx.rect(0, 0, width, height);
        ctx.closePath();
        ctx.fill();
    };

var render = function () { 
        if(!entities) return;
        entities.forEach(function (e, i, a) {  
          ctx.fillStyle = (e.fillStyle)? e.fillStyle : '#282828';
          ctx.beginPath();
          ctx.rect((e.x)? e.x : 0,
                   (e.y)? e.y : 0,
                   (e.width)? e.width : 0,
                   (e.height)? e.height : 0); /* make this handle different shapes, images, etc. */
          ctx.closePath();
          ctx.fill();
        });
    };

var logic = function () {
        if(!entities) {
          entities = [ new Block({x: width/2, y: height/2}) ]; 
          return;
        }
        
    };

var loop = function () {
        clear();
        render();
        logic();
        game = setTimeout(loop, 1000 / 50);
    };

loop();
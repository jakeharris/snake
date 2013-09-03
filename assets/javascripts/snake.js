var width = 320,
    height = 500,
    c = document.getElementById('c'),
    ctx = c.getContext('2d'),
    game;

c.width = width;
c.height = height;

var clear = function () {
        ctx.fillStyle = '#d0e7f9';
        ctx.beginPath();
        ctx.rect(0, 0, width, height);
        ctx.closePath();
        ctx.fill();
    };

var loop = function () {
        clear();
        game = setTimeout(loop, 1000 / 50);
    };

loop();
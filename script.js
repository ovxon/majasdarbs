var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = 0
while (x <= 800) {
    ctx.moveTo(0, 0);
    ctx.lineTo(x, 800);
    ctx.moveTo(0, 0);
    ctx.lineTo(800, x);
    ctx.moveTo(800, 800);
    ctx.lineTo(x, 0);
    ctx.moveTo(800, 800);
    ctx.lineTo(0, x);
    ctx.moveTo(800, 0);
    ctx.lineTo(0, x);
    ctx.moveTo(800, 0);
    ctx.lineTo(x, 800);
    ctx.moveTo(0, 800);
    ctx.lineTo(x, 0);
    ctx.moveTo(0, 800);
    ctx.lineTo(800, x);
    ctx.stroke();
    x = x + 80;
}
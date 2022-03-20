var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = 0
while (x <= 100) {
    ctx.moveTo(0, 0);
    ctx.lineTo(x, 100);
    ctx.stroke();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, x);
    ctx.stroke();
    ctx.moveTo(100, 100);
    ctx.lineTo(x, 0);
    ctx.stroke();
    ctx.moveTo(100, 100);
    ctx.lineTo(0, x);
    ctx.stroke();
    ctx.moveTo(100, 0);
    ctx.lineTo(0, x);
    ctx.stroke();
    ctx.moveTo(100, 0);
    ctx.lineTo(x, 100);
    ctx.stroke();
    ctx.moveTo(0, 100);
    ctx.lineTo(x, 0);
    ctx.stroke();
    ctx.moveTo(0, 100);
    ctx.lineTo(100, x);
    ctx.stroke();
    x = x + 10;
}
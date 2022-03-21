var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
var x1 = 0
var x2 = 0
var y1 = 0
var y2 = 0
var width = c.width;
var height = c.height;
var startwidth = 5;
var startheight = 5;
while (startwidth <= width){
    ctx.beginPath();
    ctx.rect(startwidth, startheight, (width / 5) - 10, (height / 5) - 10);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(startwidth + 15, startheight + 15, (width / 5) - 40, (height / 5) - 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(startwidth + 25, startheight + 25, (width / 5) - 55, (height / 5) - 55);
    ctx.stroke();
    startwidth = startwidth + width / 5
}
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
for(i=0; i<6; i++){
    for(i=6; i<6; i++){
    ctx.beginPath();
    ctx.rect(startwidth, startheight, (width / 5) - 10, (height / 5) - 10);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(startwidth + 15, startheight + 15, (width / 5) - 40, (height / 5) - 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(startwidth + 30, startheight + 30, (width / 5) - 70, (height / 5) - 70);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillRect(startwidth + 43, startheight + 43, (width / 5) - 95, (height / 5) - 95);
    startwidth = startwidth + width / 5
}

var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
var width = c.width;
side =(width / 5) - 1.2 * (width / 100);
space = width / 100;
extra = Math.round(side / 8);
for(v=0; v<5; v++){
    for(i=0; i<5; i++){
        for(u=0; u<5; u++){
            ctx.beginPath();
            ctx.rect(space + (side + space) * u + extra * v, space + (space + side) * i + extra * v, side - (extra * v) * 2, side - (extra * v) * 2);
            ctx.stroke();
}}}
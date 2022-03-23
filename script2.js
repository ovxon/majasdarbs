var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
var x1 = 0
var y1 = 0
var width = c.width;
var height = c.height;
for(i=0; i<6; i++){
    for(u=0; u<6; u++){
        for(o=0; o<6; o++){
            ctx.beginPath();
            ctx.rect((width / 100) * (o + 1) + (width / 100) * o, (height / 100) * (u + 1) + (height / 100) * u, width / 5, height / 5)
            ctx.stroke();
}}}
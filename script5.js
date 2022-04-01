function karogs (country, lielums) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var k = lielums / 4;
    var v = country.toLowerCase();
    ctx.clearRect(0,0,250,170);
    if (v == "bd") {
        ctx.beginPath();
        ctx.fillStyle = "rgb(0, 106, 78)";
        ctx.fillRect(0, 0, 250 * k, 150 * k);
        ctx.fillStyle = "rgb(244, 42, 65)";
        ctx.arc(115 * k, 75 * k, 50 * k, 0, 2 * Math.PI);
        ctx.fill();
       }
    if (v == "id") {
        ctx.beginPath();
        ctx.fillStyle = "rgb(206, 17, 38)";
        ctx.fillRect(0, 0, 250 * k, 84 * k);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 84 * k, 250 * k, 84 * k);
    }
    if (v == "jp") {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 250 * k, 168 * k);
        ctx.fillStyle = "rgb(188, 0, 45)";
        ctx.arc(125 * k, 84 * k, 50 * k, 0, 2 * Math.PI);
        ctx.fill();
    }
}
function button() {
    var country = "", lielums = 0;
    karogs(country, 4);
}
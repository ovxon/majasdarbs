var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
function checkData(){
    var x_start = parseInt(document.getElementById("x_start").value);
    var y_start = parseInt(document.getElementById("y_start").value);
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);
    c.width = document.getElementById("c_width").value;
    c.height = document.getElementById("c_height").value;
    if (x_start >= 0 && x_start < c.width && y_start >= 0 && y_start < c.height){
        alert(x_start + " " + y_start + " " + width + " " + height + " " + (x_start + width) + " " + (y_start + height));
        if ((x_start + width) <= c.width && (y_start + height) <= c.height){
            ctx.fillStyle = document.getElementById("b_color").value;
            ctx.fillRect(x_start, y_start, width, height);
            ctx.strokeStyle = document.getElementById("l_color").value;
            ctx.strokeStyle = lineWidth(5)
            ctx.strokeRect(x_start, y_start, width, height);
        } else {
            alert("Platums vai augstums nav ievadīts pareizi, mēģini vēlreiz!");
        }
    } else {
        alert("Kāda no sākuma koordinātām nav pareizi ievadīta, mēģini vēlreiz!");
    }
}
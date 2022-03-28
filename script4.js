var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
function checkData(){
    var x_start = document.getElementById("x_start").value;
    var y_start = document.getElementById("y_start").value;
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    c.width = document.getElementById("c_width").value;
    c.height = document.getElementById("c_height").value;
}
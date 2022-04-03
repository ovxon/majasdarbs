function karogs (valsts, lielums){
    var pam = Canvas;
    var zimejums = pam.getContext("2d");
    lielums = document.querySelector('input[name="size"]:checked').value;
    var k = lielums / 4;
    var v = valsts.toLowerCase();
    zimejums.clearRect(0,0, pam.width, pam.height);
    if (bd.checked==true) {
        zimejums.beginPath();
        zimejums.fillStyle = "rgb(0, 106, 78)";
        zimejums.fillRect(0, 0, 250 * k, 150 * k);
        zimejums.fillStyle = "rgb(244, 42, 65)";
        zimejums.arc(115 * k, 75 * k, 50 * k, 0, 2 * Math.PI);
        zimejums.fill();
       }
    if (id.checked==true)  {
        zimejums.beginPath();
        zimejums.fillStyle = "rgb(206, 17, 38)";
        zimejums.fillRect(0, 0, 250 * k, 84 * k);
        zimejums.fillStyle = "white";
        zimejums.fillRect(0, 84 * k, 250 * k, 84 * k);
    }
    if (jp.checked==true)  {
        zimejums.beginPath();
        zimejums.fillStyle = "white";
        zimejums.fillRect(0, 0, 250 * k, 168 * k);
        zimejums.fillStyle = "rgb(188, 0, 45)";
        zimejums.arc(125 * k, 84 * k, 50 * k, 0, 2 * Math.PI);
        zimejums.fill();
    }
    if (lv.checked==true)  {
      zimejums.beginPath();
        zimejums.fillStyle = "rgb(140, 8, 12)";
        zimejums.fillRect(0, 0, 250 * k, 60 * k);
      zimejums.fillRect(0, 110 * k, 250 * k, 60 * k);
        zimejums.fillStyle = "white";
        zimejums.fillRect(0, 55 * k, 250 * k, 60 * k);
    }
    if (ua.checked==true)  {
        zimejums.beginPath();
        zimejums.fillStyle = "rgb(0, 91, 187)";
        zimejums.fillRect(0, 0, 250 * k, 84 * k);
        zimejums.fillStyle = "rgb(255, 213, 0)";
        zimejums.fillRect(0, 84 * k, 250 * k, 84 * k);
    }
}
function button(){
    var valsts = "", lielums = 0;
    karogs("bd", 4);
}
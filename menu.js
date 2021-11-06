// *************************MENU ORDER******************************

document.getElementById("order").onclick = function(event) {
    var p1 = 6.95;
    var p2 = 12.95;
    var p3 = 4.95;
    var p4 = 10.45;
    var p5 = 12.50;
    var p6 = 19.99;
    var p7 = 15.50;
    var p8 = 5.95;
    var p9 = 3.45;
    var p10 = 11.50;

    var quantitym1 = document.getElementById("quantitym1").value;
    var quantitym2 = document.getElementById("quantitym2").value;
    var quantitym3 = document.getElementById("quantitym3").value;
    var quantitym4 = document.getElementById("quantitym4").value;
    var quantitym5 = document.getElementById("quantitym5").value;
    var quantitym6 = document.getElementById("quantitym6").value;
    var quantitym7 = document.getElementById("quantitym7").value;
    var quantitym8 = document.getElementById("quantitym8").value;
    var quantitym9 = document.getElementById("quantitym9").value;
    var quantitym10 = document.getElementById("quantitym10").value;

    var total = (quantitym1 * p1) + (quantitym2 * p2) + (quantitym3 * p3)
     + (quantitym4 * p4) + (quantitym5 * p5) + (quantitym6 * p6) + (quantitym7 * p7)
      + (quantitym8 * p8) + (quantitym9 * p9) + (quantitym10 * p10);

    if(total>0){
        document.getElementById("orderTotal").value = total;
        document.getElementById("msgOrder").innerHTML = "Thank you so much for ordering with us :D<br>Please wait for 20 minutes while we prepare your order :)";
    }
    else{
        document.getElementById("orderTotal").value = "NaN";
        document.getElementById("msgOrder").innerHTML = "Please order to get the total :)";   
    }
}
document.getElementById("clearOrder").onclick = function(event) {
    document.getElementById("quantitym1").value = "0";
    document.getElementById("quantitym2").value = "0";
    document.getElementById("quantitym3").value = "0";
    document.getElementById("quantitym4").value = "0";
    document.getElementById("quantitym5").value = "0";
    document.getElementById("quantitym6").value = "0";
    document.getElementById("quantitym7").value = "0";
    document.getElementById("quantitym8").value = "0";
    document.getElementById("quantitym9").value = "0";
    document.getElementById("quantitym10").value = "0";

    document.getElementById("orderTotal").value = "";
    document.getElementById("msgOrder").innerHTML = "";
}

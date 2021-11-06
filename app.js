// *************************CALCULATOR CODING******************************

//Arithmetic operations
document.getElementById("equal").onclick = function(event) {
	var operand = document.getElementById("operand").value;
	var val1 = document.getElementById("value1").value;
	var val2 = document.getElementById("value2").value;
if(operand=="+"){
	let calc = Number(val1) + Number(val2);
	document.getElementById("value2").value = calc;
}
else if(operand=="-"){
	let calc = Number(val1) - Number(val2);
	document.getElementById("value2").value = calc;
}
else if(operand=="*"){
	let calc = Number(val1) * Number(val2);
	document.getElementById("value2").value = calc;
}
else if(operand=="/"){
	let calc = Number(val1) / Number(val2);
	document.getElementById("value2").value = calc;
}
else{
	let val2 = document.getElementById("value2").value = "NA";
}
operand = document.getElementById("operand").value= "";
val1 = document.getElementById("value1").value= "";
document.getElementById("value1").placeholder = "";
document.getElementById("operand").placeholder = "";

}

// Clear screen
document.getElementById("clean").onclick = function(event) {
	operand = document.getElementById("operand").value= "";
	val1 = document.getElementById("value1").value= "";
	val2 = document.getElementById("value2").value= "";
	document.getElementById("value1").placeholder = "5";
	document.getElementById("operand").placeholder = "+";
}

// *************************TIP CALCULATOR CODING******************************

//Arithmetic operations
document.getElementById("submit").onclick = function(event) {
	let bill = document.getElementById("bill").value;
	var tip = Number(15);
	var friends = document.getElementById("friends").value;

	let totalTip = (Number(bill) / 100) * Number(tip);
	let total = (Number(totalTip) + Number(bill));
	let divide = (Number(total) / Number(friends));

	document.getElementById("tipAmount").value= totalTip;
	document.getElementById("total").value= total;
	document.getElementById("divide").value= divide;
}

document.getElementById("clear").onclick = function(event) {
	document.getElementById("bill").value= "";
	document.getElementById("friends").value= "";
	document.getElementById("tipAmount").value= "";
	document.getElementById("total").value= "";
	document.getElementById("divide").value= "";
}
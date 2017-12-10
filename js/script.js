var yourname="john Doe";
var age=20;
var country="Austria";
var horse_power=150;
document.getElementById("fname").innerHTML=yourname
document.getElementById("age").innerHTML=age
document.getElementById("country").innerHTML=country
document.getElementById("hrpower").innerHTML=horse_power


function calculateInsurance(){

	num1 = document.getElementById("hrpower").value;
	num2 = document.getElementById("age").value;
	document.getElementById("result").innerHTML=((num1*100)/num2)+150;

}

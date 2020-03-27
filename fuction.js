
function cal1() {
	
	var myprice =150;
	var devideprice =  myprice / 100;
	var taxAmount = 10;
	var totalTax = devideprice * 10;
	var actualPrice =myprice +totalTax;

	document.write(actualPrice);

}
document.write("Total Price:") + cal1();
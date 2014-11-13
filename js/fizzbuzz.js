$(document).ready(function() {
	
	var end = prompt("Enter an Integer:  ");

	while (!isInteger(end)) {
		end = prompt("Please enter a valid Integer");
	}
  	runFizzBuzzTo(+end);
});

function isInteger(n) {
	var re=/^-?[0-9]+$/;
	return re.test(n);
}

function runFizzBuzzTo(end) {
	runFizzBuzz(1, end);
}
function runFizzBuzz(start, end) {
	for(var i = start; i <= end; i++) {
		var fb = fizzbuzz(i);
		$("#list").append($("<li>" + fb + "</li>"));
	}
}

function fizzbuzz(n) {
	var fb = "";
	if(n % 3 === 0) { fb += "fizz"; }
	if(n % 5 === 0) { fb += "buzz"; }
	if( !fb ) { fb = n; }	
	return fb;
}
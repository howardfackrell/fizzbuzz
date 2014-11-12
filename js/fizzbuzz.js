$(document).ready(function() {
	alert("jquery is running on the page");
  runFizzBuzz(1, 100);
});

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
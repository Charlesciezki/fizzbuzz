"use strict";
var count = 1;

	while (count <= 100) {
	var fizzbuzz = '';	
	
if (count % 15 == 0){
	fizzbuzz = "Fizzbuzz";
}
else if (count % 3 == 0){
	fizzbuzz = "Fizz";
}
else if (count % 5 == 0){
	fizzbuzz = "buzz";
}
else {
	fizzbuzz = null;
}
console.log(fizzbuzz || count);
count++;
}
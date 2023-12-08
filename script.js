function decimalToBinary(num) {
  // your code here
	let res = 0;
	let p =1;
	while (num > 0) {
		let rem = num%2;
		res = res + Math.pow(10,p) * rem;
		p ++;
		num = Math.floor(num/2);
	}

	res = Math.floor(res/10);
	return res.toString();
}

const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));

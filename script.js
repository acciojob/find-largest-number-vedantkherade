function findLargest(a, b, c) {
  //your code here
	if (a >= b && a >= c) {
    return a;
  }
  // Compare b with a and c
  else if (b >= a && b >= c) {
    return b;
  }
  // Otherwise, c is the largest
  else {
    return c;
  }
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));

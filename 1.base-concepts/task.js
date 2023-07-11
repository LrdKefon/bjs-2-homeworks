"use strict"
function solveEquation(a, b, c) {
	let arr;
	const discriminant = Math.pow(b, 2) - 4 * a * c;
		if (discriminant < 0) {
		arr = [];
		} else if (discriminant === 0) {
			arr = [-b / (2 * a)]
			} else if (discriminant > 0) {
				arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]
      }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }

  percent = percent/100/12;

  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}
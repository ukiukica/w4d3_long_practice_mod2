class Calculator {
	constructor(total = 0) {
		this.total = total;
	}
	add(num) {
		this.total += num;
		return this.total;
	}
	subtract(num) {
		this.total -= num;
		return this.total;
	}
	divide(num) {
		this.total /= num;
		return this.total;
	}
	multiply(num) {
		this.total *= num;
		return this.total;
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}

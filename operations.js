const add = (x, y) => +x + +y;

const subtract = (x, y) => +x - +y;

const multiply = (x, y) => +x * +y;

const divide = (x, y) => +x / +y;

const exponential = (x, y) => Math.pow(+x, +y);

const mod = (x, y) => +x % +y;

const pythagorean = (x, y) => Math.sqrt((+x * +x) + (+y * +y));

const validateNumbers = (x, y) => {
	if(isNaN(x) || isNaN(y)) {
		return false;
	}
	return true;
}

module.exports = { add, subtract, multiply, divide, validateNumbers, exponential, mod, pythagorean };
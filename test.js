const assert = require('assert');
const operations = require('./operations.js');
const loginController = require('./loginController.js');

it('correctly calculates the sum of 1 and 3', ()=> {
	assert.equal(operations.add(1, 3), 4);
})

it('correctly calculates the difference of 33 and 3', () => {
	assert.equal(operations.subtract(33, 3), 30);
});

it('correctly calculates the product of 12 and 12', () => {
	assert.equal(operations.multiply(12, 12), 144);
});

it('correctly calculates the quotient of 10 and 2', () => {
	assert.equal(operations.divide(10, 2), 5);
});

it('correctly calculates the exponential value of 5 to the power of 2', () => {
	assert.equal(operations.exponential(5, 2), 25);
});

it('correctly calculates the remainder of 10 mod 3', () => {
	assert.equal(operations.mod(10, 3), 1);
});

it('correctly calculates the hypoteneuse of 20 and 99', () => {
	assert.equal(operations.pythagorean(20, 99), 101);
});

it('indicates failure when a string is used instead of a number', () => {
	assert.equal(operations.validateNumbers('sammy', 5), false);
});

it('indicates failure when two strings is used instead of numbers', () => {
	assert.equal(operations.validateNumbers('sammy', 'sammy'), false);
});

it('successfully runs when two numbers are used', () => {
	assert.equal(operations.validateNumbers(5, 5), true);
});


it('should return true if a valid user id was found', (done) => {
	loginController.isValidUserId(['abc123', 'xxx6969'], 'abc123', function(isValid) {
		assert.equal(isValid, true);
		done();
	});
});
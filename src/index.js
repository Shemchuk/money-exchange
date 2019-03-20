// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	// Your code goes here!
	// Return an object containing the minimum number of coins needed to make change

	if (currency <= 0) {
		return {};
	}

	if (currency > 10000) {
		return { error: "You are rich, my friend! We don't have so much coins for exchange" };
	}

	let result = {};

	x = Math.floor(currency / 50);
	if (x > 0) {
		console.log('Half-dollars');
		result['H'] = x;
		currency = currency % 50;
	}

	x = Math.floor(currency / 25);
	if (x > 0) {
		console.log('Quarters');
		result['Q'] = x;
		currency = currency % 25;
	}

	x = Math.floor(currency / 10);
	if (x > 0) {
		console.log('Dimes');
		result['D'] = x;
		currency = currency % 10;
	}

	x = Math.floor(currency / 5);
	if (x > 0) {
		console.log('Nickels');
		result['N'] = x;
		currency = currency % 5;;
	}

	if (currency > 0) {
		console.log('Pennies');
		result['P'] = currency;
	}
	
	return result;
}

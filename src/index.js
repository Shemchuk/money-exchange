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
	let coins = [
		{ type: 'H', value: 50 },
		{ type: 'Q', value: 25 },
		{ type: 'D', value: 10 },
		{ type: 'N', value: 5 },
		{ type: 'P', value: 1 },
	];

	coins.forEach(coin => {
		amount = Math.floor(currency / coin.value);
		if (amount > 0) {
			result[coin.type] = amount;
			currency = currency % coin.value;
		}
	});

	return result;
}

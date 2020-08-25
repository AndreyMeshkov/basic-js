const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	const month = date.getMonth();
	if (Object.prototype.toString.call(date) === '[object Date]') {
		return month < 2 ? 'winter' : month < 5 ? 'spring' : month < 8 ? 'summer' : month < 11 ? 'autumn' : 'winter';
	} else if (date === undefined) {
		return 'Unable to determine the time of year!';
	} else {
		throw new Error();
	}
};
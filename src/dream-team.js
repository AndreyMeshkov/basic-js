const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	const arr = [];
	members.forEach(val => {
		if (typeof (val) === 'string') {
			arr.push(val.trim()[0].toUpperCase())
		}
	})
	return arr.sort().join('');
};
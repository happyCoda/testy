/*
* testy.js JavaScript library. 
* (c) 2013, happyCoda. 
* MIT License. 
* https://github.com/happyCoda/testy
*/

var Testy = {};

Testy.isEquals = function (params) {

	var self = this, result;

	result = self.assert({
		outcome: params.inputVal === params.expectedVal,
		message: params.message
	});

	return result;
};

Testy.isGreaterThan = function (params) {

	var self = this, result;

	result = self.assert({
		outcome: params.inputVal > params.expectedVal,
		message: params.message
	});

	return result;
};
Testy.isLessThan = function (params) {

	var self = this, result;

	result = self.assert({
		outcome: params.inputVal < params.expectedVal,
		message: params.message
	});

	return result;
};

// TODO: Implement this method
Testy.isThrowException = function () {};

Testy.assert = function (params) {
	var result = '/***********************************************************************\n';

	result += '******** ' + (params.outcome ? 'PASS! ' : 'FAIL! ') + params.message + ' ********\n';

	result += '****************************************************************************/'

	return result;
};

Testy.pack = function (packOfTests) {
	var self = this, 
	i, 
	len = packOfTests.length,
	currentTest,
	packOfResults = [];

	for (i = 0; i < len; i++) {
		currentTest = packOfTests[i];
		packOfResults.push(self[currentTest.type](currentTest.params));
	}

	return packOfResults;
};
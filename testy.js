/*
* testy.js JavaScript library. 
* (c) 2013, happyCoda. 
* MIT License. 
* https://github.com/happyCoda/testy
*/

var Testy = {};

/*
* Tests if a passed value equals to expected one
*
* @param {object} params object with input, expected, message and silent parameters
* @result {string} result of test in string format
*/
Testy.isEqual = function (params) {

	var self = this, 
	result;

	result = self.assert({
		outcome: params.input === params.expected,
		message: params.message,
		silent: params.silent
	});

	return result;
};

/*
* Tests if a passed value is greater than expected one
*
* @param {object} params object with input, expected, message and silent parameters
* @result {string} result of test in string format
*/
Testy.isGreaterThan = function (params) {

	var self = this, 
	result;

	result = self.assert({
		outcome: params.input > params.expected,
		message: params.message,
		silent: params.silent
	});

	return result;
};

/*
* Tests if a passed value is less than expected one
*
* @param {object} params object with input, expected, message and silent parameters
* @result {string} result of test in string format
*/
Testy.isLessThan = function (params) {

	var self = this, 
	result;

	result = self.assert({
		outcome: params.input < params.expected,
		message: params.message,
		silent: params.silent
	});

	return result;
};

/*
* Checks if given method throws an exception
*
* @param {object} params object with outcome, message and silent parameters
* @returns {string} result of the test in a string format
*
*/
Testy.isThrowException = function (params) {
	var self = this,
	error = null,
	result;

	try {
		params.action(params.argsForAction);
	} catch (err) {
		error = err;
	}

	result = self.assert({
		outcome: typeof error !== null,
		message: params.message,
		silent: params.silent
	});

	return result;
};


/*
* Checks if outcome is true than test is passed, othewise - not. Formats the result.
* Assert is an low-level method which is used by all higher-level methods, such as
* isEqual, isGreaterThan etc.
*
* @param {object} params object with outcome, message and silent parameters
* @returns {string} result of test in string format
*/
Testy.assert = function (params) {
	var result;

	result = '/***********************************************************************\n';

	result += '******** ' + (params.outcome ? 'PASS! ' : 'FAIL! ') + params.message + ' ********\n';

	result += '****************************************************************************/';

	if (!params.silent) {
		console.log(result);
	}

	return result;
};

/*
* Executes a pack of given tests using specific method accordingly given test type.
*
* @param {array} packOfTests is a collection of tests and they have types and params
* @returns {array} packOfResults is an array of results of tests were conducted
*/
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
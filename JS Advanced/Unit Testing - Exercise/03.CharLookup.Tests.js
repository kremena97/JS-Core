let lookupChar = require('./03.CharLookup');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('lookupChar', function () {
    it('with a non-string first parameter, should return undefined', function () {
        expect(lookupChar(13,0).to.equal(undefined,'The function did not return the correct result!'));
    });

    it('with a non-number second parameter, should return undefined', function () {
        expect(lookupChar('pesho','gosho').to.equal(undefined,'The function did not return the correct result!'));
    });

    it('with a floating point number second parameter, should return undefined', function () {
        expect(lookupChar('pesho',3.12).to.equal(undefined,'The function did not return the correct message!'));
    });

    it('with an incorrect index value, should return incorrect index', function () {
        expect(lookupChar('gosho',13).to.equal('Incorrect index','The function did not return the correct value!'));
    });

    it('with a negative index value, should return incorrect index', function () {
        expect(lookupChar('stamat',-1).to.equal('Incorrect index','The function did not return the correct value!'));
    });

    it('with an index value equal to string length, should return incorrect index', function () {
        expect(lookupChar('pesho',5).to.equal('Incorrect index','The function did not return the correct value!'));
    });
});
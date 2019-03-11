let sum = require('./04.SumofNumbers');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('Sum of Numbers', function () {
    it('with an array of strings parameter, should return true', function () {
        expect(isNaN(sum(['pesho', 'maria']))).to.equal(true, 'Function did not return the correct result!');
    });

    it('with an array of strings and numbers parameter, should return true', function () {
        expect(isNaN(sum(['pesho', 2]))).to.equal(true, 'Function did not return the correct result!');
    });

    it('with an array of numbers parameter, should return correct sum', function () {
        expect(sum([1, 2, 3])).to.equal(6, 'Function did not return the correct result!');
    });
});
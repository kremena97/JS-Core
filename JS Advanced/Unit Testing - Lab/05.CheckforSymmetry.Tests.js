let isSymmetric = require('./05.CheckforSymmetry');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('Check For Symmetry', function () {
    it('with a non-array parameter, should return false', function () {
        expect(isSymmetric(1,2,2,1)).to.equal(false, 'Function did not return the correct result!');
    });

    it('with a symmetric array parameter with even count elements, should return true', function () {
        expect(isSymmetric([1, 2, 2, 1])).to.equal(true, 'Function did not return the correct result!');
    });

    it('with a symmetric array parameter with odd count different type elements, should return true', function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.equal(true, 'Function did not return the correct result!');
    });

    it('with a non-symmetric array parameter, should return false', function () {
        expect(isSymmetric([-1,2,1])).to.equal(false, 'Function did not return the correct result!');
    });

    it('with an array with one parameter, should return true', function () {
        expect(isSymmetric([1])).to.equal(true, 'Function did not return the correct result!');
    });

});
let mathEnforcer = require('./04.MathEnforcer');

let expect = require('chai').expect;
let assert = require('chai').assert;
let closeTo = require('chai').closeTo;

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('with a negative number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });
        it('with a floating point number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(10.56)).to.equal(15.56);
        });
        it('with a floating point number parameter, should return correct result', function () {
            let num = mathEnforcer.addFive(-10.56);
            assert.closeTo(num,-5.56,1);
        });
    });
    describe('subtractTen', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it('with a negative number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('with a floating point number parameter, should return correct result', function () {
            let num = mathEnforcer.subtractTen(10.56);
            assert.closeTo(num,0.56,1)
        });
        it('with a floating point number parameter, should return correct result', function () {
            let num = mathEnforcer.subtractTen(-10.56);
            assert.closeTo(num,-20.56,1)
        });
    });
    describe('sum', function () {
        it('with a non-number parameters, should return correct result', function () {
            expect(mathEnforcer.sum('5','10')).to.equal(undefined);
        });
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(5,'10')).to.equal(undefined);
        });
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.sum('5',10)).to.equal(undefined);
        });
        it('with a number parameters, should return correct result', function () {
            expect(mathEnforcer.sum(5,10)).to.equal(15);
        });
        it('with a negative number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(5,-10)).to.equal(-5);
        });
        it('with a negative number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(-5,10)).to.equal(5);
        });
        it('with a negative number parameters, should return correct result', function () {
            expect(mathEnforcer.sum(-5,-10)).to.equal(-15);
        });
        it('with a floating point number parameters, should return correct result', function () {
            let num = mathEnforcer.sum(10.56,5.5);
            assert.closeTo(num,16.06,0.5)
        });
        it('with a negative floating point number parameter, should return correct result', function () {
            let num = mathEnforcer.sum(10.56,-5.5);
            assert.closeTo(num,5.06,0.5)
        });
        it('with a negative floating point number parameter, should return correct result', function () {
            let num = mathEnforcer.sum(-10.56,5.5);
            assert.closeTo(num,-5.06,0.5)
        });
        it('with a negative floating point number parameter, should return correct result', function () {
            let num = mathEnforcer.sum(-10.56,-5.5);
            assert.closeTo(num,-16.06,0.5)
        });
        it('with a negative floating point number parameter, should return correct result', function () {
            let num = mathEnforcer.sum(10.56,);
            expect(num).to.equal(undefined);
        });
    });
});
let createCalculator = require('./07.AddSubtract');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('Add/Subtract', function () {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it("with no parameters for get, should return 0", function () {
        expect(calc.get()).to.be.equal(0,'Function did not return the correct result!');
    });

    it("for  add(6); add(3); should return 5", function () {
        calc.add(6);
        calc.add(3);
        expect(calc.get()).to.be.equal(9,'Function did not return the correct result!');
    });

    it("for subtract(3); subtract(2); should return -5 after ", function () {
        calc.subtract(13);
        calc.subtract(7);
        let value = calc.get();
        expect(value).to.be.equal(-20,'Function did not return the correct result!');
    });

    it("for add(10.5); subtract(1.1); should return 4.2", function () {
        calc.add(10.5);
        calc.subtract(1.1);
        expect(calc.get()).to.be.equal(10.5 - 1.1,'Function did not return the correct result!');
    });

    it("for add(10); subtract('10'); add('-20'); subtract(-10) should return -10", function () {
        calc.add(10);
        calc.subtract('10');
        calc.add('-20');
        calc.subtract(-10);
        expect(calc.get()).to.be.equal(-10,'Function did not return the correct result!');
    });

    it("for add(string), should return NaN", function () {
        calc.add('hello');
        expect(calc.get()).to.be.NaN;
    });

    it("for subtarct(string) should return NaN", function () {
        calc.subtract('hello');
        expect(calc.get()).to.be.NaN;
    });
});
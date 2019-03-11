let rgbToHexColor = require('./06.RGBtoHex');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('RGB to HEX', function () {
    it("should return #FF9EAA for (255, 158, 170)", function () {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal("#FF9EAA",'Function did not return the correct result!');
    });

    it("should return #0C0D0E for (12, 13, 14)", function () {
        expect(rgbToHexColor(12, 13, 14)).to.be.equal("#0C0D0E",'Function did not return the correct result!');
    });

    it("should return #000000 for (0, 0, 0)", function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000",'Function did not return the correct result!');
    });

    it("should return #FFFFFF for (255, 255, 255)", function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF",'Function did not return the correct result!');
    });

    it('if no three parameters are given, should return undefined', function () {
        expect(rgbToHexColor(156,233)).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('with non-integer parameters, should return undefined', function () {
        expect(rgbToHexColor({red:548},[],'45')).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('with out of the range integer parameters, should return undefined', function () {
        expect(rgbToHexColor(256,256,256)).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('with out of the range integer parameters, should return undefined', function () {
        expect(rgbToHexColor(-1,-1,-1)).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('with no parameters, should return undefined', function () {
        expect(rgbToHexColor()).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('with decimal parameters, should return undefined', function () {
        expect(rgbToHexColor(2.5,3.6,1.5)).to.equal(undefined, 'Function did not return the correct result!');
    });

});
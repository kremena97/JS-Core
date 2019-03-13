let PaymentPackage = require('./08.PaymentPackage');

let expect = require('Chai').expect;

describe('Payment Package', function () {
    let paymentPackage;
    beforeEach(function () {
        paymentPackage = new PaymentPackage('HR Services',1500);
    });

    describe('constructor', function () {
        it('with two parameters', function () {

            expect(paymentPackage).to.be.equal('PaymentPackage { _name: \'HR Services\', _value: 1500, _VAT: 20, _active: true }');
        });
    });
});
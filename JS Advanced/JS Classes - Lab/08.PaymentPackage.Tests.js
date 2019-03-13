let PaymentPackage = require('./08.PaymentPackage');

let expect = require('Chai').expect;

describe('Payment Package', function () {
    let paymentPackage;
    beforeEach(function () {
        paymentPackage = new PaymentPackage('HR Services', 1500);
    });

    describe('prototype', function () {
        it('check if function attached to prototype', function () {
            expect(typeof PaymentPackage.prototype.toString === 'function').to.be.equal(true);
        });
    });

    describe('constructor', function () {
        it('with two parameters', function () {
            expect(paymentPackage.toString()).to.be.equal('Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800');
        });

        it('without parameters', function () {
            const errorFunc = () =>{
                paymentPackage = new PaymentPackage();
            };

            expect(errorFunc).to.throw(Error);
        });

        it('with non string parameter for name', function () {
            const errorFunc = () =>{
                paymentPackage = new PaymentPackage(5,5);
            };

            expect(errorFunc).to.throw(Error);
        });

        it('with non number parameter for value', function () {
            const errorFunc = () =>{
                paymentPackage = new PaymentPackage('HR Services','Pesho');
            };

            expect(errorFunc).to.throw(Error);
        });
    });

    describe('accessor name', function () {
        it('get name', function () {
            expect(paymentPackage.name).to.be.equal('HR Services', 'Expected to return "HR Services"');
        });

        it('set name with correct value', function () {
            paymentPackage.name = 'Consultation';
            expect(paymentPackage.name).to.be.equal('Consultation','Expected to return "Consultation"');
        });

        it('set name with empty string', function () {
            const errorFunc = () =>{
                paymentPackage.name='';
            };

            expect(errorFunc).to.throw(Error);
        });

        it('set name with non string value', function () {
            const errorFunc = () =>{
                paymentPackage.name=5;
            };

            expect(errorFunc).to.throw(Error);
        });
    });

    describe('accessor value', function () {
        it('get value', function () {
            expect(paymentPackage.value).to.be.equal(1500, 'Expected to return 1500');
        });

        it('set value with correct value', function () {
            paymentPackage.value = 30;
            expect(paymentPackage.value).to.be.equal(30,'Expected to return 30');
        });

        it('set value with negative number', function () {
            const errorFunc = () =>{
                paymentPackage.value=-5;
            };

            expect(errorFunc).to.throw(Error);
        });

        it('set value with non number value', function () {
            const errorFunc = () =>{
                paymentPackage.value='Pesho';
            };

            expect(errorFunc).to.throw(Error);
        });
    });

    describe('accessor VAT', function () {
        it('get VAT', function () {
            expect(paymentPackage.VAT).to.be.equal(20, 'Expected to return 20');
        });

        it('set VAT with correct value', function () {
            paymentPackage.VAT = 1000;
            expect(paymentPackage.VAT).to.be.equal(1000,'Expected to return 1000');
        });

        it('set VAT with negative number', function () {
            const errorFunc = () =>{
                paymentPackage.VAT=-5;
            };

            expect(errorFunc).to.throw(Error);
        });

        it('set VAT with non number value', function () {
            const errorFunc = () =>{
                paymentPackage.VAT='pesho';
            };

            expect(errorFunc).to.throw(Error);
        });
    });

    describe('accessor active', function () {
        it('get active', function () {
            expect(paymentPackage.active).to.be.equal(true, 'Expected to return true');
        });

        it('set active with false', function () {
            paymentPackage.active = false;
            expect(paymentPackage.active).to.be.equal(false,'Expected to return false');
        });

        it('set VAT with negative number', function () {
            const errorFunc = () =>{
                paymentPackage.active=-5;
            };

            expect(errorFunc).to.throw(Error);
        });
    });

    describe('toString', function () {
        it('with non active package', function () {
            paymentPackage.active = false;

            expect(paymentPackage.toString()).to.be.equal('Package: HR Services (inactive)\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800');
        });
    });
});
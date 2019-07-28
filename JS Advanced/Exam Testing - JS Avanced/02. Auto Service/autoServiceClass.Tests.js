let AutoService = require('./autoServiceClass');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe("Auto Service", function() {
    let autoService;
    beforeEach(function () {
        autoService = new AutoService(5);
    });

    describe("constructor", function() {
        it('is initialized without parameters', function () {
            autoService = new AutoService();
            expect(autoService.garageCapacity).to.be.equal(undefined);
            expect(autoService.workInProgress).to.eql([]);
            expect(autoService.backlogWork).to.eql([]);
        });

        it('it initialized with parameters', function () {
            expect(autoService.garageCapacity).to.be.equal(5);
            expect(autoService.workInProgress).to.eql([]);
            expect(autoService.backlogWork).to.eql([]);
        });
    });

    describe("Available Space", function() {
        it('should return correct value', function () {
            expect(autoService.availableSpace).to.be.equal(5);
        });
    });

    describe("Sign Up For Review", function() {
        it('should return correct value', function () {
            autoService.signUpForReview('Peter', 'A96B',{plateNumber: 'A96B', clientName: 'Peter'});
            expect(autoService.workInProgress.length).to.be.equal(1);
        });
        it('should return correct value', function () {
            autoService = new AutoService(0);
            autoService.signUpForReview('Peter', 'A96B',{plateNumber: 'A96B', clientName: 'Peter'});
            expect(autoService.backlogWork.length).to.be.equal(1);
        });
        it('should return correct value', function () {
            autoService.signUpForReview();
            expect(autoService.workInProgress.length).to.be.equal(1);
        });
    });

    describe("Car Info", function() {
        it('should return correct value', function () {
            autoService.signUpForReview('Peter', 'A96B',{plateNumber: 'A96B', clientName: 'Peter'});
            let carInfo = autoService.carInfo('A96B', 'Peter');
            expect(JSON.stringify(carInfo)).to.be.equal('{"plateNumber":"A96B","clientName":"Peter","carInfo":{"plateNumber":"A96B","clientName":"Peter"}}');
        });

        it('should return correct value', function () {
            autoService = new AutoService(0);
            autoService.signUpForReview('Peter', 'A96B',{plateNumber: 'A96B', clientName: 'Peter'});
            let carInfo = autoService.carInfo('A96B', 'Peter');
            expect(JSON.stringify(carInfo)).to.be.equal('{"plateNumber":"A96B","clientName":"Peter","carInfo":{"plateNumber":"A96B","clientName":"Peter"}}');
        });

        it('should return correct value', function () {
            let carInfo = autoService.carInfo('A96B', 'Peter');
            expect(carInfo).to.be.equal('There is no car with platenumber A96B and owner Peter.');
        });
    });

    describe("Repair Car", function() {
        it('should return correct value', function () {
            expect(autoService.repairCar()).to.be.equal('No clients, we are just chilling...');
        });

        it('should return correct value', function () {
            autoService.signUpForReview('Peter', 'A96B',{plateNumber: 'A96B', clientName: 'Peter'});
            expect(autoService.repairCar()).to.be.equal('Your car was fine, nothing was repaired.');
        });

        it('should return correct value', function () {
            autoService.signUpForReview('Peter', 'A96B',{plateNumber: 'broken', clientName: 'Peter'});
            expect(autoService.repairCar()).to.be.equal('Yours plateNumber was repaired.');
        });

    });
});

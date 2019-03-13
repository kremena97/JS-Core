let StringBuilder = require('./07.StringBuilder');

let expect = require('Chai').expect;

describe('String Builder', function () {
    let sb;
    beforeEach(function () {
        sb = new StringBuilder();
    });

    describe('prototype', function () {
        it('check if function attached to prototype', function () {
            expect(typeof StringBuilder.prototype.append === 'function').to.be.equal(true);
            expect(typeof StringBuilder.prototype.prepend === 'function').to.be.equal(true);
            expect(typeof StringBuilder.prototype.remove === 'function').to.be.equal(true);
            expect(typeof StringBuilder.prototype.insertAt === 'function').to.be.equal(true);
        });
    });

    describe('constructor', function () {
        it('is initialized without parameters', function () {
            expect(sb._stringArray.join('')).to.be.equal('', 'Expected empty string')
        });

        it('it initialized with parameters', function () {
            sb = new StringBuilder('test');
            expect(sb._stringArray.join('')).to.be.equal('test', 'Expected to return "test"');
        });
    });

    describe('append', function () {
        it('is initialized with wrong parameter type', function () {
            const errorFunc = () =>{
                sb.prepend({name: 'Pesho'});
            };

            expect(errorFunc).to.throw(TypeError);
        });

        it('is initialized with correct data', function () {
            sb.prepend('Test');

            expect(sb._stringArray.join('')).to.be.equal('Test','Expected to return "Test")');
        });

        it('is initialized with multiple correct data', function () {
            sb.prepend('JS');
            sb.prepend(' from ');
            sb.prepend('Hello');

            expect(sb._stringArray.join('')).to.be.equal('Hello from JS','Expected to return "Hello from JS")');
        });
    });

    describe('append', function () {
        it('is initialized with wrong parameter type', function () {
            const errorFunc = () =>{
                sb.append({name: 'Pesho'});
            };

            expect(errorFunc).to.throw(TypeError);
        });

        it('is initialized with correct data', function () {
            sb.append('Hello');
            sb.append(' from ');
            sb.append('JS');

            expect(sb._stringArray.join('')).to.be.equal('Hello from JS','Expected to return "Hello from JS")');
        });
    });

    describe('remove', function () {
        it('works correctly', function () {
            sb.append('Hello');
            sb.append(' from ');
            sb.append('JS');

            sb.remove(5,6);
            expect(sb._stringArray.join('')).to.be.equal('HelloJS', 'Expected to return "HelloJS"');
        });
    });

    describe('insertAt', function () {
        it('with wrong parameter type should throw an TypeError', function () {
            const errorFunc = () =>{
                sb.insertAt({name: 'Pesho'},5);
            };

            expect(errorFunc).to.throw(TypeError);
        });

        it('works correctly', function () {
            sb.append('Hello');
            sb.append('JS');

            sb.insertAt(' from ',5);
            expect(sb._stringArray.join('')).to.be.equal('Hello from JS', 'Expected to return "Hello from JS"');
        });

        it('works correctly', function () {
            sb.append('Hello');
            sb.append(' from ');

            sb.insertAt('JS',11);
            expect(sb._stringArray.join('')).to.be.equal('Hello from JS', 'Expected to return "Hello from JS"');
        });
    });

    describe('toString', function () {
        it('works correctly', function () {
            sb.append('Hello');

            expect(sb.toString()).to.be.equal('Hello', 'Expected to return "Hello"');
        });
    });
});
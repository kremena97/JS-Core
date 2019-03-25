let FilmStudio = require('./filmStudio');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('Film Studio', function () {
    let filmStudio;
    beforeEach(function () {
        filmStudio = new FilmStudio('SU-Studio');
    });

    describe('prototype', function () {
        it('check if func attached to proto', function () {
            expect(typeof FilmStudio.prototype.casting === 'function').to.be.equal(true);
            expect(typeof FilmStudio.prototype.makeMovie === 'function').to.be.equal(true);
            expect(typeof FilmStudio.prototype.lookForProducer === 'function').to.be.equal(true);
        });
    });

    describe('constr', function () {
        it('is initialized without parameters', function () {
            filmStudio = new FilmStudio();
            expect(filmStudio.name).to.be.equal(undefined);
            expect(filmStudio.films).to.eql([]);
        });

        it('it initialized with parameters', function () {
            expect(filmStudio.name).to.be.equal('SU-Studio');
            expect(filmStudio.films).to.eql([]);
        });
    });

    describe('Make Movie', function () {
        it('two correct params', function () {
            let makeMovie = filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

            expect(makeMovie.toString()).to.be.equal('[object Object]');
            expect(makeMovie.filmName.toString()).to.be.equal('The Avengers');
            expect(makeMovie.filmRoles.toString()).to.be.equal('[object Object],[object Object],[object Object],[object Object]');
        });
        it('no params', function () {
            const errorFunc = () =>{
                filmStudio.makeMovie();
            };
expect(errorFunc).to.throw('Invalid arguments count');
        });

        it('with existing film', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            expect(filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']).filmName).to.be.equal('The Avengers 2');
        });

        it('wrong film params', function () {
            const errorFunc = () =>{
                filmStudio.makeMovie([1,2,3], ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'])
            };
expect(errorFunc).to.throw('Invalid arguments');
        });

        it('wrong roles params', function () {
            const errorFunc = () =>{
                filmStudio.makeMovie('The Avengers', {pesho:2});
            };
            expect(errorFunc).to.throw('Invalid arguments');
        });
    });

    describe('Casting', function () {
        it('if there is no films', function () {
            expect(filmStudio.casting('pesho','romeo')).to.be.equal('There are no films yet in SU-Studio.');
        });

        it('with correct params and no role', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
expect(filmStudio.casting('pesho','romeo')).to.be.equal('pesho, we cannot find a romeo role...');
        });

        it('with correct params', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
            expect(filmStudio.casting('pesho','Hulk')).to.be.equal('You got the job! Mr. pesho you are next Hulk in the The Avengers. Congratz!');
        });

        it('without params', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
            expect(filmStudio.casting()).to.be.equal('undefined, we cannot find a undefined role...');
        });

        it('incorrect actor param', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
            expect(filmStudio.casting({pesho:1},'Hulk')).to.be.equal('You got the job! Mr. [object Object] you are next Hulk in the The Avengers. Congratz!');
        });

        it('incorrect role param', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
            expect(filmStudio.casting('pesho',{hulk:12})).to.be.equal('pesho, we cannot find a [object Object] role...');
        });
    });

    describe('Look For Prod', function () {
        it('with string param', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
            expect(filmStudio.lookForProducer('The Avengers').toString()).to.be.equal('Film name: The Avengers\n' +
                'Cast:\n' +
                'false as Iron-Man\n' +
                'false as Hulk\n' +
                'false as Arrow guy\n' +
                'false as Ant-man\n')
        });

        it('without param', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
            const errorFunc = () =>{
                filmStudio.lookForProducer();
            };
            expect(errorFunc).to.throw(Error);
        });

        it('incorrect param', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
            const errorFunc = () =>{
                filmStudio.lookForProducer([1,2,3]);
            };
            expect(errorFunc).to.throw(Error);
        });

        it('incorrect string param', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
            const errorFunc = () =>{
                filmStudio.lookForProducer('bai pesho');
            };
            expect(errorFunc).to.throw(Error);
        });
    });
});
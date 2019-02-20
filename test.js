const lib = require('./index');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;

describe('vowel counter', function () {
    it('should return 2 for hello', function () {
        expect(lib.vowels('hello'))
            .to
            .equal(2);
    });

    it('should return 2 for hEllO', function () {
        expect(lib.vowels('hEllO'))
            .to
            .equal(2);
    });

    it('should return 5 for hello tomato', function () {
        expect(lib.vowels('hello tomato'))
            .to
            .equal(5);
    });

    it('should return 0 for hello Why?', function () {
        expect(lib.vowels('Why?'))
            .to
            .equal(0);
    });
});
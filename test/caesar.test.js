//What the caesar() function needs to do.
//Takes in 3 parameters, input(inputted text to be encoded or decoded), shift(how much each letter is shifted by. positive number shifts to the right(A=>D), 
//and encode(boolean value that describes whether you should decode or encode. by default, this is set to true))
//When building the function, keep the following in mind:
    //if the shift value isnt present, equal to 0, lessthan -25 or greater than 25, the function should return false.
    //spaces and other nonalphanumeric characters should remain the same as the original message
    //capital letters can be ignored
    //if a letter is shifted so that it goes off the alphabet, it should wrap around to the front of the alphabet.

const { expect } = require('chai');
const { caesar } = require('../src/caesar');

describe("shift value error handling", () => {
    it('should return false if the shift value is equal to 0', () => {
        const message = 'Hello World!';
        const shift = 0;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;        
    });
    it('should return false if the shift is less than -25', () => {
        const message = 'Hello World!';
        const shift = -26;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    })
    it('should return false if the shift is greater than 25', () => {
        const message = 'Hello World!';
        const shift = 26;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    })
    it('should return false if the shift value is not there', () => {
        const message = 'Hello World!';
        const shift = undefined;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    })
})

describe('encoding a message', () => {
    it('should encode a message by shifting the letters', () => {
        const message = 'hello world';
        const shift = 2;
        const actual = caesar(message, shift);
        const expected = 'jgnnq yqtnf';

        expect(actual).to.be.equal(expected);
    })
    it('should allow for a negative shift that shifts everything to the left', () => {
        const message = 'hello world';
        const shift = -2;
        const actual = caesar(message, shift);
        const expected = 'fcjjm umpjb';

        expect(actual).to.be.equal(expected);
    })
    it('should ignore capital letters', () => {
        const message = 'HELLO WORLD';
        const shift = 2;
        const actual = caesar(message, shift,)
        const expected = 'jgnnq yqtnf';

        expect(actual).to.be.equal(expected);
    })
    it('should retain the original spaces and nonalphanumeric characters from the message', () => {
        const message = 'hello world!'
        const shift = 2;
        const actual = caesar(message, shift);
        const expected = 'jgnnq yqtnf!';

        expect(actual).to.be.equal(expected);
    })
    it('should handle letters and each end of the alphabet appropriately', () => {
        const message = 'zebra';
        const shift = 2;
        const actual = caesar(message, shift);
        const expected = 'bgdtc';

        expect(actual).to.be.equal(expected);
    })
})

describe('decoding a message', () => {
    it('should decode a message by shifting the letters', () => {
        const message = 'jgnnq yqtnf';
        const shift = 2;
        const actual = caesar(message, shift, false);
        const expected = 'hello world'

        expect(actual).to.be.equal(expected);
    })
    it('should allow for a negative shift to decode messages as well', () => {
        const message = 'fcjjm umpjb';
        const shift = -2;
        const actual = caesar(message, shift, false);
        const expected = 'hello world';

        expect(actual).to.be.equal(expected);
    })
    it('should ignore capital letters', () => {
        const message = 'jgNNq yQtnF';
        const shift = 2;
        const actual = caesar(message, shift, false);
        const expected = 'hello world';

        expect(actual).to.be.equal(expected);
    })
    it('should leave spaces and other nonalphanumeric characters the same as the original message input', () => {
        const message = 'jgnnq yqtnf!';
        const shift = 2;
        const actual = caesar(message, shift, false);
        const expected = 'hello world!'

        expect(actual).to.be.equal(expected);
    })
    it('should handle letters at the ends of the alphabet appropriately', () => {
        const message = 'bgdtc';
        const shift = 2;
        const actual = caesar(message, shift, false);
        const expected = 'zebra';

        expect(actual).to.be.equal(expected);
    });
});
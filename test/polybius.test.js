//the polybius() function takes in two parameters, input(inputted text to be encoded or decoded), and encode(whether you should decode or encode, and is set to true by default)
//When building the function keep the following in mind:
    //You are welcome to assume that no additional symbols will be included as part of the input. only spaces and letters will be added
    //When encoding, your output should still be a string
    //When decoding, the number of characters in the string excluding spaces should be even, otherwise return false
    //spaces houyld be maintained throughout
    //capital letters can be ignored
    //the letters i and j share a space, when encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown

    const { expect } = require('chai');
    const { polybius } = require('../src/polybius')

    describe('encoding a message', () => {
        it('should encode a message by translating each letter to a number pair', () => {
            const message = 'message';
            const actual = polybius(message);
            const expected = '23513434112251'

            expect(actual).to.equal(expected);
        })
        it('should maintain spaces throughout', () => {
            const message = 'message message';
            const actual = polybius(message);
            const expected = '23513434112251 23513434112251';

            expect(actual).to.equal(expected);
        })
        it('should translate both I and J to 42', () => {
            const message = 'jiggle';
            const actual = polybius(message);
            const expected = '424222221351';

            expect(actual).to.equal(expected);
        })
    })

    describe("decoding a message", () => {
        it("should decode a message by translating each pair of numbers into a letter", () => {
          const message = "23513434112251";
          const actual = polybius(message, false);
          const expected = "message";
    
          expect(actual).to.equal(expected);
        });
    
        it("should translate 42 to both 'i' and 'j'", () => {
          const message = "424222221351";
          const actual = polybius(message, false);
    
          expect(actual).to.include("i");
          expect(actual).to.include("j");
        });
    
        it("should leave spaces as is", () => {
          const message = "2345 23513434112251";
          const actual = polybius(message, false);
          const expected = "my message";
    
          expect(actual).to.equal(expected);
        });
    
        it("should return false if the length of all numbers is odd", () => {
          const message = "2345 235134341122514";
          const actual = polybius(message, false);
    
          expect(actual).to.be.false;
        });
    });
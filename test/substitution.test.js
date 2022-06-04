//The substitution() function takes in three parameters: input(inputted text to be encoded or decoded), alphabet(refers to the substitution alphabet)
//and encode(determines whether you are decoding or encoding, with the default set to true)
//When building this function, keep the following in mind:
    //the input could include spaces and letters, as well as special characters such as #$% etc.
    //spaces should be maintained throughout
    //capital letters can be ignored
    //the alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #$%. otherwise, it should return false
    //all the characters in the alphabet parameter must be unique. otherwise, it should return false.
const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe('error handling', () => {
    it('should take in a string of unique characters that is exactly 26 characters long', () => {
        const alphabet = 'qwertyuiopasdfghjklzxcvbnm'
        expect(alphabet.length == 26);
    }) 
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "message";
        const alphabet = "short";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
  
      it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "message";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
    });
  
    describe("encoding a message", () => {
      it("should encode a message by using the given substitution alphabet", () => {
        const message = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "ykrrpik";
  
        expect(actual).to.equal(expected);
      });
  
      it("should work with any kind of key with unique characters", () => {
        const message = "message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "ysii.rs";
  
        expect(actual).to.equal(expected);
      });
  
      it("should preserve spaces", () => {
        const message = "my message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "yp ysii.rs";
  
        expect(actual).to.equal(expected);
      });
    });
  
    describe("decoding a message", () => {
      it("should decode a message by using the given substitution alphabet", () => {
        const message = "ykrrpik";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });
  
      it("should work with any kind of key with unique characters", () => {
        const message = "ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });
  
      it("should preserve spaces", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
})
    })

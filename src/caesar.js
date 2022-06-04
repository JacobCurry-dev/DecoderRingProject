// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6




const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    let results = "";
    if (shift < -25 || shift === 0 || shift > 25 || shift == undefined) return false; 
    if (encode === false) shift = shift * -1; 
    for (let i = 0; i < input.length; i++) {
      let lowered = input[i].toLowerCase()
      let asciiNum = lowered.charCodeAt();  
      if (asciiNum < 97 || asciiNum > 122) {
         results += String.fromCharCode(asciiNum); 
       }
       let shifted = asciiNum + shift
      if (shifted < 97) {
        shifted += 26 
      }
      if (shifted > 122) {
        shifted -= 26 
      }
      if (shifted >= 97 && shifted <= 122) {
        results += String.fromCharCode(shifted); 
      }
    }
    console.log(results)
    return results; 
  }

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };

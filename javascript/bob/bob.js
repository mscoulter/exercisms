//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

function isUpperCase(str) {
    return str === str.toUpperCase();
};

Bob.prototype.hey = function(input) {
  if (isUpperCase(input) && (input.substr(-1)==="!" ||input.substr(-1)==="?" || isNaN(input.substr(-1))) && input.match(/[a-z]/i)){
    return('Whoa, chill out!')
  }
  else if (input.substr(-1)==="?") {
    return("Sure.")
  }
  else if (!(/\S/.test(input))) {
    return('Fine. Be that way!')
  }
  else{return("Whatever.")}
};


module.exports = Bob;

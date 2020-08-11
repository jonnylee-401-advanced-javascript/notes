('use strict');

const isPayload = require('isPayload');
const minimist = require('minimist');


function Input (){

  const args = minimist(process.argv.slice(2));


  this.action = this.action(args.a) ;  
//   this.payload = this.payload(args.p);
}

Input.prototype.getAction = function(action = ''){
  let validAction = /add|a/i;
  return validAction.test(action) ? action : 'GET';

  
};

Input.prototype.getPayload = function (payload = ''){
  return isPayload('pay-load') ? payload : undefined;
};

module.exports = Input;
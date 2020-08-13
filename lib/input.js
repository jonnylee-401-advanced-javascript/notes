('use strict');
const minimist = require ('minimist');
/**
 * Creates the Input object based on CL inputs
 * @constructor
 * @returns {Object} command : {action: String, payload: String}
 */
function Input (){
  const args = minimist(process.argv.slice(2));
  this.command = this.parse(args);
  console.log(this);
}

Input.prototype.parse= function (object){
  const argsMap = {
    a:'add', 
    add:'add', 
  };
  const arg = Object.keys(object).filter(arg=>{
    return argsMap[arg];
  })[0];
  const command = {
    action: argsMap[arg],
    payload: object[arg],
  };
  return command;
};



Input.prototype.valid=function(){
  return !!(this.command.action && this.command.payload);
};


module.exports = Input;

















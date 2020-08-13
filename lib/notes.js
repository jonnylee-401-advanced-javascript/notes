('use strict');

function Notes (object){
  const { action, payload } = object.command;
  this.action = action;
  this.payload = payload;

}

Notes.prototype.execute = function (){
  this[this.action]();
};

Notes.prototype.add= function (){
  const note = {
    id: Date.parse(),
    note: this.payload,
  };
  console.log(`adding note: ${note.note}`);
};

module.exports = Notes;
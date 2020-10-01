#!/usr/bin/env node
'use strict';


const minimist = require('minimist');
const Input = require('./lib/input');
const Notes = require('./lib/notes');

const mongoose  = require('mongoose');


const MONGODB_URI = 'mongodb://localhost:27017/notesy';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  
}).then(console.log('connected'));

const input = new Input();
const notes = new Notes();
if(input.valid()){
  notes.execute(input)
    .then(()=>mongoose.disconnect());
} else{
  process.exit(9);
}

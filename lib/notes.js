'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
const http = {};

http.fetch = function (opts) {
  if (opts) {
    console.log(`Action ${opts.action}`);
    console.log(`Payload ${opts.payload}`);
  }
};

module.exports = http;
#!/usr/bin/env node

////////////////////
//
// Author: osdiomar
// Description: This is the first exercise in the course. We just want to interact with files
// Date: 23/06/2013
//
////////////////////

var fs = require('fs');

var outfile = "hello.txt";
var out = "A startup is a business built to grow rapidly.\n";

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);


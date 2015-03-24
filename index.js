'use strict';

var nJwt = require('njwt');
var util = require('util');

var str='';
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    str += chunk;
  }
});

process.stdin.on('end', function() {

  new nJwt.Parser().setSigningKey('').parseClaimsJws(str,function(err,jwt) {
    console.log(util.inspect(jwt.body,{colors:true,depth:null}));
    console.log('\n');
  });
});
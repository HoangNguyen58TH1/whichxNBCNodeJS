var fs = require('fs')

fs.appendFile('filenew.js', 'Content file aaa', function(err){
  if(err) throw err;
  console.log('Save');
})
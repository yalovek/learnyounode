const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], 'utf-8', (err, data) => {
  data.forEach(name => {
    if (path.extname(name) === `.${process.argv[3]}`) {
      console.log(name);
    }
  });
});

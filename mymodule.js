const fs = require('fs');
const path = require('path');
module.exports = function (files, filter, callback) {
  fs.readdir(files, 'utf-8', (err, data) => {
    if (err) {
      return callback(err);
    }

    callback(null, data.filter(name => path.extname(name) === `.${filter}`));
  });
};

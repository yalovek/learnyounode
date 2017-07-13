const http = require('http');
const bl = require('bl');
const result = [];
const args = process.argv.slice(2);
const length = args.length;
args.forEach((arg, index) => {
  http.get(arg, res => {
    res.pipe(bl((err, data) => {
      result[index] = data.toString();
      if (result.length === length) {
        result.forEach(value => console.log(value));
      }
    }));
  }).on('error', console.error);
});

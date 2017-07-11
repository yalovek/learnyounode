const mymodule = require('./mymodule');
mymodule(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    throw new Error(err);
  }

  data.forEach(name => {
    console.log(name);
  });
});

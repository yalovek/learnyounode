const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/plain'
  });
  fs.createReadStream(process.argv[3]).pipe(res);
}).listen(Number(process.argv[2]));

const http = require('http');
const url = require('url');
const parseTime = time => ({
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds()
});
const unixTime = time => ({
  unixtime: time.getTime()
});
const getTime = url => /^\/api\/parsetime/.test(url)
  ? parseTime
  : /^\/api\/unixtime/.test(url)
    ? unixTime
    : () => null;
http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const time = new Date(parsedUrl.query.iso);
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(getTime(req.url)(time)));
}).listen(Number(process.argv[2]));

const net = require('net')
const zero = i => (i < 10 ? '0' : '') + i;
const now = date => `${date.getFullYear()}-${zero(date.getMonth() + 1)}-${zero(date.getDate())} ${zero(date.getHours())}:${zero(date.getMinutes())}`;
net.createServer(socket => {
  socket.end(`${now(new Date())}\n`);
}).listen(Number(process.argv[2]));

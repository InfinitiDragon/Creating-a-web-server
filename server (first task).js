const http = require('http');
const hostname = 'localhost';
const port = 8010;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hellow');
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущено на http://${hostname}:${port}/`);
});

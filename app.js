const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// quick and direct single page for testing
const server = http.createServer((req, res) => {
  const startDigit = '5';
  const stepCount = '2';

  graphStep(startDigit, stepCount);  

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World - reload page to see output of bfs map function in command line output');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


const http = require('http');
const fs = require('fs');
const port = 3000; //5000, 8000

http.createServer(function(req, res) {
  if(req.url === '/') {
    fs.readFile('index.html', 'utf-8', (err, data) => {
      res.write(data);
      res.end();
    });
  } else if(req.url === '/contact'){
    fs.readFile('contact.html', 'utf-8', (err, data) => {
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('Страница не найдена!');
    res.end();
  }
}).listen(port, function() {
  console.log('Server at http://localhost:3000');
});
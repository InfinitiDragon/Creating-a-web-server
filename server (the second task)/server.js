const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8000;

const student = {
  name: 'Дуткевич Віктор Петрович',
  group: 'ІПЗс-22-2',
  faculty: 'Інженерія Програмного забеспечення',
  course:'1 курс',
  semester:'2 семестр'

};

const server = http.createServer((req, res) => {
  fs.readFile('./index.html', 'utf8', (err, data) => {

    if (err) {

      res.statusCode = 500;
      res.end('Internal Server Error');
      console.error(err);

    } else {

      const html = data.replace('{{name}}', student.name)

        .replace('{{group}}', student.group)
        .replace('{{faculty}}', student.faculty)
        .replace('{{course}}', student.course)
        .replace('{{semester}}', student.semester);
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`the server is started on the hosting http://${hostname}:${port}/`);
});

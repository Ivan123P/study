// app.get('/json', function(req, res) {
//   let obj = {
//     id: 1,
//     name: 'Node.js'
//   };
  
//   res.send(obj);
// });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ encoded: false }));
app.use(bodyParser.json());

let courses = [
  {
    id: 1,
    name: 'node.js'
  },
  {
    id: 2,
    name: 'angular'
  },
  {
    id: 3,
    name: 'react'
  }
];

app.get('/', function(req, res) {
  res.send('привет');
});
// /api/ -> сырые данные
app.get('/api/courses', function(req, res) {
  res.send(courses);
});

app.get('/api/courses/:id', function(req, res) {
  let course = courses.find(function(course) {
    return course.id === parseInt(req.params.id);
  });

  res.send(course);
});

app.post('/api/courses', (req, res) => {
  let course = {
    id: Date.now(),
    name: req.body.name,
    code: req.body.code
  };

  courses.push(course);

  res.send(courses);
});

app.put('/api/courses/:id', (req, res) => {
  let course = courses.find((course) => {
    return course.id === parseInt(req.params.id);
  });

  course.name = req.body.name;

  res.send(courses);
});

app.delete('/api/courses/:id', (req, res) => {
  courses = courses.filter((course) => {
    return course.id !== parseInt(req.params.id);
  })

  res.send(courses);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
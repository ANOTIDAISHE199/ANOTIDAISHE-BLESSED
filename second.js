const express = require('express');
const data = require('./data.json');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json(data);
});

app.get('/class/:id', (req, res) => {
    const studId = Number(req.params.id);
    const student = data.filter((student) => student.id == studId);
    res.json(student);
    console.log(req.params);
});

app.listen(PORT, () => {
    console.log(`The server is running on port number ${PORT}`);
    console.log('json data captured successfully');
});
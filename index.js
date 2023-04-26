
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/hey', (req, res) => {
    res.send('Bye World!');
})

console.log('Server is running on port 3333');
app.listen(3333)
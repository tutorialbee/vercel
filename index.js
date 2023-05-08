const express = require('express');

//express app
const app = express();

// listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));


app.get('/', (req, res) => res.send('Home 2 Page Route'));

// app.get('/', (req, res) => {
//     res.sendFile('./views/index.html', {root:__dirname})
// });

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.get('/contact', (req, res) => res.send('Contact Page Route'));


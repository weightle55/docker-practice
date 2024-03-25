const express = require('express');

//Constants
const PORT = 8080;

//App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT);
console.log(`Running on http://127.0.0.1:${PORT}`);
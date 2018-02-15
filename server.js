const express = require('express');
const app = express();
// funcion cada vez que se ejecuta la funcion
const server = app.listen(3003, on);

function on() {
    console.log('Server on');
}

app.use(express.static('public'));
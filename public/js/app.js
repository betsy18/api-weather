const express = require('express');
const app = express();
const server = app.listen(3003, on);

function on() {
    console.log('Server on');
}

app.use(express.static('public'));

// clave 4000565e85394e8dc859ece86fbf071f
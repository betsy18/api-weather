const express = require('express');
const path = require('path');
const app = express();
// funcion cada vez que se ejecuta la funcion
const server = app.listen(3003, on);

// setting
app.set('port', process.env.PORT || 3003);
app.set('views', path.join(__dirname, 'views'));
aap.set('view engine', 'ejs');

// route
app.use(require('./routes.index.js'));

app.use((req, res) => {
    res.status(404)
});
// static files
app.use(express.static(path.join(__dirname, 'public')))

function on() {
    console.log('Server on');
}

app.use(express.static('public'));
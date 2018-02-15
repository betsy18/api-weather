const express = require('express');
// nuevas rutas para el server
const router = express.Router();

router.get('/', (req, res) => {
  res.end('welcome');
});

modules.export = router;
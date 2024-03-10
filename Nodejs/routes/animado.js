var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('animado', {
    title: 'Animaciones',
    h1texto: 'Esto es un título animado'
  });
});

module.exports = router;
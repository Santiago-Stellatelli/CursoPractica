var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('hover', {
        title: 'Hover',
        h1texto:'Posicione el mouse sobre este recuadro',
        texto: 'Esto es un texto escondido'
    });
});

module.exports = router;
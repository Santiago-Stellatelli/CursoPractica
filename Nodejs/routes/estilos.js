var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('estilos', {
        title: 'Estilos',
        h1texto: 'Esto es un titulo con estilos',
        nombre: 'Santiago Stellatelli'
    });
});

module.exports = router;
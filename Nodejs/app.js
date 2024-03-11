var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var estilosRouter = require('./routes/estilos');
var animadoRouter = require('./routes/animado');
var hoverRouter = require('./routes/hover')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*----------------------------------------------------*/
app.use(session({
  secret: 'kwyunbshrip276x63nbn',
  resave: false,
  saveUninitialized: true
}));

app.get('/', function (req, res) {
  var conocido = Boolean(req.session.nombre);
  var mayor18 = req.session.edad >=18

  res.render('indextarea2', {
    h1texto: 'Iniciar sesión',
    conocido: conocido,
    nombre: req.session.nombre,
    edad: req.session.edad,
    parrafo: req.session.parrafo,
    edadmayor18: mayor18
  })
})

app.post('/login', function (req, res) {
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre
    req.session.edad = req.body.edad

    if (parseInt(req.body.edad) < 18) {
      req.session.parrafo = 'sos menor de edad, no podras acceder al contenido';
    } else {
      req.session.parrafo = 'sos mayor de edad, podes acceder al contenido y por eso cambió el fondo de color';
    }
  }

  res.redirect('/')
})


app.get('/salir', function (req, res) {
  req.session.destroy();
  res.redirect('/')
})

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/estilos', estilosRouter)
// app.use('/animacion', animadoRouter)
// app.use('/hover', hoverRouter )



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const express = require('express');
const router = express.Router();



router.get('/', function (req, res) {
    res.render('index', {
      pageTitle: 'H1 de pruebas ',
      images: 'images',
      metaDescripcion: 'servicio de kinesiologia a domicilio para las comunas de : Las Condes, Providencia, La Florida, Macul, Peñalolen y Ñuñoa.',
      tiTuloh1: 'titulo de pruebas'
    });
  });
  
  router.get('/about', function (req, res) {
    res.render('about', {
      pageTitle: 'titulo acerca de la empresa',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'pagina que habla sobre la empresa'
    });
  }); 

  router.get('/contacto', function (req, res) {
    res.render('contacto', {
      pageTitle: 'formulario de contacto kinesiologo a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'formulario de contacto '
    });
  });
  router.get('/contacto/contacto2', function (req, res) {
    res.render('./contacto/contacto2', {
      pageTitle: 'formulario de contacto kinesiologo a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'formulario de contacto '
    });
  });
  router.get('/contacto/contacto2/contacto3', function (req, res) {
    res.render('./contacto/contacto3', {
      pageTitle: 'formulario de contacto kinesiologo a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'formulario de contacto '
    });
  });
  router.get('/politica-de-privacidad', function (req, res) {
    res.render('privacidad', {
      pageTitle: 'formulario de contacto kinesiologo a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'politica de privacidad '
    });
  }); 
  router.get('/politica-de-cokies', function (req, res) {
    res.render('cokies', {
      pageTitle: 'formulario de contacto kinesiologo a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'politica de cookies '
    });
  });
  router.get('/aviso-legal', function (req, res) {
    res.render('avisolegal', {
      pageTitle: 'formulario de contacto kinesiologo a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'aviso legal '
    });
  });  
  router.get('/kiensiologo-respiratorio', function (req, res) {
    res.render('./respiratorio', {
      pageTitle: 'formulario de contacto kinesiologo a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'formulario de contacto '
    });
  }); 
  router.get('/kiensiologo-respiratorio./kinesiologo-respiratorio-infantil', function (req, res) {
    res.render('respiratorio-niños', {
      pageTitle: 'formulario de contacto kinesiologo a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'formulario de contacto '
    });
  }); 
  module.exports = router;


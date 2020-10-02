
const express = require('express');
const router = express.Router();



router.get('/', function (req, res) {
    res.render('index', {
      pageTitle: ' Terapia de Acupuntura en Santiago ',
      images: 'images',
      metaDescripcion: 'Servicio terapia de acupuntura en Santiago domicilio para las comunas de : Las Condes, Providencia, La Florida, Macul, Peñalolen y Ñuñoa.',
      tiTuloh1: 'Terapia de Acupuntura en Santiago',
      index: 'index',
      canonical: 'http://www.terapiaacupunturasantiago.cl'
    });
  });
  
  router.get('/blog', function (req, res) {
    res.render('Acupuntura_blog', {
      pageTitle: ' Acupunturista blog',
      images: 'images',
      metaDescripcion: 'Nuestro enfoque es atender a las personas que ya no han logradoresultados en otro tipos de terapias',
      tiTuloh1: 'terapias  de acupuntura en diversas patologias',
       index: 'index',
      canonical: 'http://www.terapiaacupunturasantiago.cl/blog'
    });
  }); 
  router.get('/acne', function (req, res) {
    res.render('Acupuntura_Acne', {
      pageTitle: ' Acupuntuira y Acne',
      images: 'images',
      metaDescripcion: 'Nuestro enfoque es atender a las personas que ya no han logradoresultados en otro tipos de terapias',
      tiTuloh1: 'Terapias  de Acupuntura en Acne',
       index: 'index',
      canonical: 'http://www.terapiaacupunturasantiago.cl/acne'
    });
  }); 

  router.get('/blog/acupuntura-dolor', function (req, res) {
    res.render('acupuntura-dolor', {
      pageTitle: 'Acupuntura Dolor y Tratammientos ',
      images: 'images',
      metaDescripcion: ' Acupuntura dolor y su tratamiento en medicina china en santiago de chile',
      tiTuloh1: 'Acupuntura Dolor y Tratamiento | Medicina China ',
      index: 'index',
      canonical: 'http://www.terapiaacupunturasantiago.cl/blog/acupuntura-dolor'
    });
  }); 
  router.get('/politica-de-privacidad', function (req, res) {
    res.render('privacidad', {
      pageTitle: 'Politica de privacidad ',
      images: 'images',
      metaDescripcion: ' Politicas de privacidad del sitio web',
      tiTuloh1: 'Politica de privacidad ',
      index: 'noindex',
      canonical: 'http://www.kinesishouse.cl/politica-de-privacidad'
    });
  }); 
  router.get('/politica-de-cokies', function (req, res) {
    res.render('cokies', {
      pageTitle: 'Politica de cokkies ',
      images: 'images',
      metaDescripcion: ' Politicas de cokies del sitio web',
      tiTuloh1: 'Politica de cookies ',
      index: 'noindex',
      canonical: 'http://www.kinesishouse.cl/politica-de-cokies'
    });
  });
  router.get('/aviso-legal', function (req, res) {
    res.render('avisolegal', {
      pageTitle: 'aviso legal ',
      images: 'images',
      metaDescripcion: ' aviso legal del sitio web',
      tiTuloh1: 'aviso legal ',
      index: 'noindex',
      canonical: 'http://www.kinesishouse.cl/aviso-legal'
    });
  });  
  router.get('/kinesiologo-respiratorio', function (req, res) {
    res.render('./respiratorio', {
      pageTitle: 'kinesiologo respiratorio a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' ▷ servicio de kinesiologia respiratoria a domicilio en santiago de chile, neumonia, bronquitis, epoc, aspiracion de secreciones',
      tiTuloh1: 'kinesiologo respiratorio a domicilio,',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio'
    });
  }); 
  router.get('/kinesiologo-respiratorio/kinesiologia-respiratoria-infantil', function (req, res) {
    res.render('./kinesiologia-respiratoria-infantil', {
      pageTitle: 'kinesiologo respiratorio infantil a domicilio  ',
      images: 'images',
      metaDescripcion: 'kinesiologia respiratoria niños a domicilio en santiago de chile, asma, bronquitis, neumonia, fibrosis quistica, sindrome bronquial obstructivo',
      tiTuloh1: 'kinesiologo respiratorio infantil a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio/kinesiologo-respiratorio-infantil'
    });
  }); 
   router.get('/kinesiologo-traumatologia', function (req, res) {
    res.render('./traumatologia', {
      pageTitle: 'kinesiologo en traumatologia a domicilio Santiago ',
      images: 'images',
      metaDescripcion: 'servicio de kinesiologia a domicilio en traumatologia, tratamiento en lumbagos, tendinopatias, postoperados, desgarros musculares',
      tiTuloh1: 'kinesiologo en traumatologia a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia'
    });
  });
   router.get('/kinesiologo-traumatologia/artroscopia-cadera', function (req, res) {
    res.render('./artoscopia-cadera', {
      pageTitle: 'Kinesiologia en rehabilitacion  ARTROSCOPÍA DE CADERA (AC): ',
      images: 'images',
      metaDescripcion: ' rehabilitacion en artroscopia de cadera, metodos terapeuticos, operacion , rehabilitacion recomedaciones ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  ARTROSCOPÍA DE CADERA (AC): ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/artroscopia-cadera'
    });
  });
  router.get('/kinesiologo-traumatologia/ossgodd-schlatter', function (req, res) {
    res.render('./ossgodd-later', {
      pageTitle: 'Kinesiologia en rehabilitacion  ossgodd-schlatter ',
      images: 'images',
      metaDescripcion: ' rehabilitacion en ossgodd-schlatter, metodos terapeuticos, operacion , rehabilitacion recomedaciones,dolor anterior de rodilla ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  ossgodd-schlatter',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/ossgodd-schlatter'
    });
  });
  router.get('/kinesiologo-traumatologia/enfermedad-sever', function (req, res) {
    res.render('./sever', {
      pageTitle: 'Kinesiologia en rehabilitacion  enfermedad de sever ',
      images: 'images',
      metaDescripcion: ' rehabilitacion en sever, metodos terapeuticos, operacion , rehabilitacion recomedaciones,dolor anterior de rodilla ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en enfermedad de sever',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/enfermedad-sever'
    });
  });
  router.get('/kinesiologo-traumatologia/fractura-cadera', function (req, res) {
    res.render('./cadera-fractura', {
      pageTitle: 'Kinesiologia en rehabilitacion  en fractura de cadera ',
      images: 'images',
      metaDescripcion: ' rehabilitacion en frctura de cadera, metodos terapeuticos, operacion , rehabilitacion recomedaciones, proceso de marcha en fractura de cadera ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en fractura de cadera',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/fractura-cadera'
    });
  });

   router.get('/kinesiologo-traumatologia/fractura-rotula', function (req, res) {
    res.render('./fractura-rotula', {
      pageTitle: 'Kinesiologia en rehabilitacion  en fractura de rotula ',
      images: 'images',
      metaDescripcion: ' rehabilitacion en farctura de rotula, metodos terapeuticos, operacion , rehabilitacion recomedaciones, proceso de marcha en fractura de rotula ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en fractura de rotula',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/fractura-rotula'
    });
  });
  router.get('/kinesiologo-traumatologia/fractura-metacarpianos', function (req, res) {
    res.render('./fractura-metacarpianos', {
      pageTitle: 'Kinesiologia en rehabilitacion  en fractura de metacarpianos',
      images: 'images',
      metaDescripcion: ' rehabilitacion en fractura de metacarpianos, metodos terapeuticos, operacion , rehabilitacion recomedaciones,fisioterapia en fractura de metacarpianos ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en fractura de metacarpianos',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/fractura-metacarpianos'
    });
  });
   router.get('/kinesiologo-traumatologia/luxacion-rotula', function (req, res) {
    res.render('./luxacion-rotula', {
      pageTitle: 'Kinesiologia en rehabilitacion  en luxacion de la rotula',
      images: 'images',
      metaDescripcion: ' rehabilitacion en luxacion de la rotula, metodos terapeuticos, operacion , rehabilitacion recomedaciones,fisioterapia en luxacion de la rotula ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en luxacion de la rotula',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/luxacion-rotula'
    });
  });
  router.get('/kinesiologo-traumatologia/fractura-tobillo', function (req, res) {
    res.render('./fractura-tobillo', {
      pageTitle: 'Kinesiologia en rehabilitacion  en fractura tobillo',
      images: 'images',
      metaDescripcion: ' rehabilitacion en fractura tobillo, metodos terapeuticos, operacion qururgica , rehabilitacion recomedaciones,fisioterapia en fractura de tobillo ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en fractura de tobillo',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/fractura-tobillo'
    });
  });
   router.get('/kinesiologo-traumatologia/osteocondritis-rodilla', function (req, res) {
    res.render('./osteocondritis-rodilla', {
      pageTitle: 'Kinesiologia en rehabilitacion  en osteocondritis de rodilla',
      images: 'images',
      metaDescripcion: ' rehabilitacion en osteocondritis de rodilla, metodos terapeuticos, operacion qururgica , rehabilitacion recomedaciones,fisioterapia en osteocondritis de rodilla ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en osteocondritis de rodilla',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/osteocondritis-rodilla'
    });
  });
   router.get('/kinesiologo-traumatologia/pinzamiento-cadera', function (req, res) {
    res.render('./pinzamiento-cadera', {
      pageTitle: 'Kinesiologia en rehabilitacion  en pinzamiento de cadera',
      images: 'images',
      metaDescripcion: ' rehabilitacion en pinzamiento de cadera, metodos terapeuticos, operacion qururgica , rehabilitacion recomedaciones,fisioterapia en pinzamiento de cadera ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en pinzamiento de cadera',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/pinzamiento de cadera'
    });
  });
     router.get('/kinesiologo-traumatologia/artrosis-rotuliana', function (req, res) {
    res.render('./artrosis-rotuliana', {
      pageTitle: 'Kinesiologia en rehabilitacion  ARTROSIS ROTULIANA  ',
      images: 'images',
      metaDescripcion: ' kinesiologia y en artrosis rotuliana, patologia artrosis femoropatelar, rehabilitacion y tratamiento ',
      tiTuloh1: '▷ Kinesiologia en rehabilitacion  artrosis rotuliana',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/artrosis-rotuliana'
    });
  });
      router.get('/kinesiologo-traumatologia/bursitis-trocanter-mayor', function (req, res) {
    res.render('./bursitis-trocanter-mayor', {
      pageTitle: 'Kinesiologia en rehabilitacion  bursitis del trocanter mayor ',
      images: 'images',
      metaDescripcion: ' kinesiologia y en bursitis del trocanter mayor, patologia bursitis trocanteriana, rehabilitacion y tratamiento ',
      tiTuloh1: '▷ Kinesiologia en rehabilitacion  bursitis del trocanter mayor',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/bursitis-trocanter-mayor'
    });
  });
   router.get('/kinesiologo-traumatologia/condromalacia-rotuliana', function (req, res) {
    res.render('./condromalacia-rotuliana', {
      pageTitle: 'Kinesiologia en rehabilitacion  condromalacia-rotuliana ',
      images: 'images',
      metaDescripcion: ' kinesiologia y en condromalacia-rotuliana, terapia en condromalacia patelar, patologia condromalacia-rotuliana, rehabilitacion y tratamiento ',
      tiTuloh1: '▷ Kinesiologia en rehabilitacion  condromalacia-rotuliana',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/condromalacia-rotuliana'
    });
  });
   router.get('/kinesiologo-neurologia', function (req, res) {
    res.render('./neurologia', {
      pageTitle: 'kinesiologo neurologia a domicilio Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologia a domicilio en neurologia, acidentes cerebros vasculares, guilliam barre,daño medular.',
      tiTuloh1: 'kinesiologo neurologia a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-neurologia'
    });
  }); 
   router.get('/kinesiologo-adulto-mayor', function (req, res) {
    res.render('./adultomayor', {
      pageTitle: 'kinesiologo para adulto mayor | geriatrico | a domicilio Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologia a domicilio en adulto mayor, ejercicios, kinesiologia integral, postrados, post operados, alzeimer, parkinson, sedentarismo.',
      tiTuloh1: 'kinesiologo para geriatrico | adulto mayor a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-adulto-mayor'
    });
  }); 
   router.get('/kinesiologo-adulto-mayor/artrosis-rodilla', function (req, res) {
    res.render('./artrosis-rodilla', {
      pageTitle: 'kinesiologo para adulto mayor | Artrosis ',
      images: 'images',
      metaDescripcion: 'artrosis de rodilla mecanismos terapeuticos en kinesiologia, desarrollo fisiopatologico de la enfermedad',
      tiTuloh1: 'kinesiologo para geriatrico | artrosis de rodilla ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-adulto-mayor/artrosis-rodilla'
    });
  }); 
   router.get('/kinesiologo-deportivo', function (req, res) {
    res.render('./kinedeportiva', {
      pageTitle: 'kinesiologo deportivo | kinesiologia | a domicilio Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologia a domicilio deportiva, ejercicios, kinesiologia integral, lesiones deportivas, lesiones de running.',
      tiTuloh1: 'kinesiologia deportiva a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-deportivo'
    });
  }); 

  router.get('/kinesiologia-domicilio', function (req, res) {
    res.render('./kinesiologia', {
      pageTitle: 'kinesiologia a domicilio | preguntas frecuentes ',
      images: 'images',
      metaDescripcion: '▷ kinesiologia a domicilio | preguntas precuentes sobre fisioterapia',
      tiTuloh1: 'kinesiologia a domicilio | preguntas y respuestas',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologia-domicilio'
    });
  }); 

  module.exports = router;


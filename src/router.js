const router = require('express').Router();
const ClientesController = require('./controllers/ClientesControler');

// Apenas para teste
router.get('/', (req, res) => {
    return res.status(200).send({ nameApp: "TLBeauty" });
});

router.get('/clientes', ClientesController.getClientes);


// router.post('/atracao', AttractionController.save);
// router.get('/atracao', AttractionController.findAll);
// router.post('/checkin', AttractionController.checkIn);
// router.get('/atracao/usuario/:id', AttractionController.getUserPosition);

module.exports = router;
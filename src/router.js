const router = require('express').Router();
const ClientesController = require('./controllers/ClientesControler');
const LoginController = require('./controllers/LoginController');
const cors = require('cors');

// Apenas para teste
router.get('/', (req, res) => {
    return res.status(200).send({ nameApp: "TLBeauty" });
});

router.get('/clientes', ClientesController.getClientes);
router.get('/cliente/:id', ClientesController.getCliente);
router.post('/clientes', ClientesController.addClientes);
router.post('/login', LoginController.logar);


// router.post('/atracao', AttractionController.save);
// router.get('/atracao', AttractionController.findAll);
// router.post('/checkin', AttractionController.checkIn);
// router.get('/atracao/usuario/:id', AttractionController.getUserPosition);

module.exports = router;
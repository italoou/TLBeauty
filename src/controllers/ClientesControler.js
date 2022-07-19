const clientesService = require("../services/ClientesService")

class ClientesController{

  async getClientes(req, res, next){
    const response = await clientesService.getClientes();
    res.json(response);
  }

  async getCliente(req, res, next){
    const response = await clientesService.getCliente(req.params.id);
    res.json(response);
  }

  async addClientes(req, res, next){
    const response = await clientesService.addClientes(req.body);
    res.json(response);

  }
}

module.exports = new ClientesController();
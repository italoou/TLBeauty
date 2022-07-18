const { json } = require("body-parser");

class ClientesService{
  async getClientes(){
    const client = {nome: "Italo Lima", dataNasc: "09/11/1999", ultimaVis: "02/10/2022"};
    return client;
  }

  async addClientes(){

  }
};

module.exports = new ClientesService();
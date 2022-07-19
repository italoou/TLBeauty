
class ClientesService{
  
  async getCliente(id){

    const fs = require('fs')
    
    const clients = await fs.readFileSync('src/database.json', 'utf8');

    let jsonClients = JSON.parse(clients);

    //Tratar Erro
    let response = {nome: "nao teve retorno"};

    for(let i = 0; i < jsonClients.length; i++){
      if(jsonClients[i].id == id){
        response = jsonClients[i];
        break;
      }
    }

    return response;
  }
  
  async getClientes(){
    const fs = require('fs')
    
    const clients = await fs.readFileSync('src/database.json', 'utf8');

    return JSON.parse(clients);
  }

  async addClientes({nome , dataNasc, ultimaVis}){
    const fs = require('fs')

    // const data = {nome: "junior Lima", dataNasc: "09/11/1999", ultimaVis: "02/10/2022"};

    const clients = await fs.readFileSync('src/database.json', 'utf8');

    let jsonClients = JSON.parse(clients);

    const id = jsonClients.length;

    const cliente = {"id": id, "nome": nome, "dataNasc": dataNasc, "ultimaVis": ultimaVis};
    
    console.log(cliente);

    jsonClients.push(cliente);

    // console.log(jsonClients);

    await fs.writeFileSync('src/database.json', JSON.stringify(jsonClients));

    return jsonClients;

  }
};

module.exports = new ClientesService();

class LoginService{
  async logar(data){
    const fs = require('fs')
    
    const file = await fs.readFileSync('src/autentication.json', 'utf8');

    let login = JSON.parse(file);

    if(login.user == data.user && login.password == data.password){
      return {logado: true};
    }

    return {logado: false};
  }

};

module.exports = new LoginService();
const loginService = require("../services/LoginService")

class LoginController{

  async logar(req, res, next){
    const response = await loginService.logar(req.body);
    res.json(response);
  }

}

module.exports = new LoginController();
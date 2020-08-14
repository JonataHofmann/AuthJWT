'use strict'

const User = use('App/Models/User')

class AuthController {

  async register({request, response}){
    const data = request.only(['username','email', 'password']);

    const user = await User.create(data);
    //return data;
    return response.json(user);
  }

  async authenticate({request, auth}){
    const {email, password} = request.all();

    const token = await auth.attempt(email,password);

    return token;
  }

}

module.exports = AuthController

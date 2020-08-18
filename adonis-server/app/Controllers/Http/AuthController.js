'use strict'

const User = use('App/Models/User')

class AuthController {

  async register({request, response}){
    const data = request.only(['username','email', 'password']);
    const user = await User.create(data);
    return response.json(user);
  }

  async authenticate({request, auth}){
    const {email, password} = request.all();
    console.log(email, password)
    const authToken = await auth.attempt(email,password);
    const user = await User.findBy('email', email);
    const token = authToken.token;
    return {token, user};
  }

  async me({request, auth}){
    const user = auth.getUser();
    delete user.password;
    return user;
  }

}

module.exports = AuthController

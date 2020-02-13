'use strict';

const sayHello = require('../../4_core/interactors/sayHello');

const sayHelloWorld = () => sayHello();
//const sayHelloWorld = (req,res) => res.json({message:sayHello()});
//module.exports = {
//    async sayHelloWorld(req,res){return res.json({message:sayHello()})}
//};
//const sayHelloPerson = request => sayHello(request.params.name);
/*

*/
/*
const sayHelloWorld = (req,res) => {
    //res.json({message: "Hello world!"})
    res.send("Hello world!");
    //return res.json({message: sayHello()})
};
const sayHelloPerson = (req,res) => {
    return res.json({message:sayHello(req.params.name)});
};
*/
//module.exports = {
    /*
  async getUser(request) {

    // Input
    const userId = request.params.id;
    // Treatment
    const user = await GetUser(userId, { userRepository });
    // Output
    if (!user) {
      return Boom.notFound();
    }
    const userSerializer = new UserSerializer();
    return userSerializer.serialize(user);
  },*/
//exports.sayHelloWorld= async function(req,res){
  // Input
  // Treatment
  //const hello = await sayHello();
  //console.log('sayHello() : ', hello);
  //console.log('sayHello() res.json : ', res.send(sayHello()));
  // Output
  //return res.send(hello)
//}
//};

/*
app.get('/hello', async (req, res) => {
        res.json({message: helloController.sayHelloWorld()})
    });
*/

/*
app.get('/hello', async (req, res) => {
        res.json({message: helloController.sayHelloWorld()})
    });
*/

module.exports = {
   sayHelloWorld,
   //sayHelloPerson
};


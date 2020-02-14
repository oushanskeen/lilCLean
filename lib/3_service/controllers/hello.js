'use strict';

const sayHello = require('../../4_core/interactors/sayHello');
//console.log(sayHello());

//const sayHelloWorld = () => sayHello();
//const sayHelloWorld = (req,res) => res.json({message:sayHello()});
/*
const sayHelloWorld = async (req,res,next) => {
    try {
        let response = await sayHello();
        console.log({message:response});
        return {message:response};
    } catch(error){
        console.log(error);
        return next(error)    
    }
};   
*/
/*
async function sayHelloWorld(req,res,next){
    try {
        let response = await sayHello();
        console.log({message:response});
        return {message:response};
    } catch(error){
        console.log(error);
        return next(error)    
    }
};
*/
const sayHelloWorld = async () =>{
    let response = await sayHello();
    return {message:response};
    //console.log(response);
};   
    
    //return {message:response};
    //console.log({message:response})
    //await res.json({message:sayHello()});
    //const response = sayHello.then(res => res);
    //let promise = new Promise(function(resolve, reject) {
        //setTimeout(() => resolve("done!"), 1000);
    //    resolve(await sayHello());
    //});

    // resolve запустит первую функцию, переданную в .then
    //promise.then(
    //  result => alert(result), // выведет "done!" через одну секунду
    //  error => alert(error) // не будет запущена
    //);
    //let response = await sayHello();
    //response.then(
    //    result => res.json({message:result}),
        //error => error 
    //);

//sayHelloWorld();
//console.log(sayHelloWorld());

//const sayHelloPerson = request => sayHello(request.params.name);


module.exports = {
   sayHelloWorld,
   //sayHelloWorld: () => sayHello(),
   //sayHelloPerson
};




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




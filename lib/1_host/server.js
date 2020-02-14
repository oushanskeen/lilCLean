let express = require('express');
//let mongoose = require('mongoose');
let bodyParser = require('body-parser');

const app = express();
//let port = process.env.PORT || 3000;

let galleryRouter = require('../2_api/routes/gallery');
let helloRouter = require('../2_api/routes/hello');
  
// mongoose instance connection url connection
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb',{ useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(function(req, res) {
//  res.status(404).send({url: req.originalUrl + ' not found'})
//});

//importing route
galleryRouter(app); //register the route
app.use('/gallery', galleryRouter);
helloRouter(app); //register the route
app.use('/hello', helloRouter/*.inside*/);
app.use('/hello/:name', helloRouter/*.inside*/);
//app.get('/hello', async (req, res) => {
//  res.json({message: 'hello accepted!'})
//})

//app.get('/gallery', async (req, res) => {
//  res.json({message: 'gallery received!'})
//})

//app.listen(port);
//console.log('todo list RESTful API server started on: ' + port);

module.exports = app;

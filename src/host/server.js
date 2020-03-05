
//  major express import ------------------------------------------------------------------------------------------
    let express = require('express');
    const app = express();
    
//  db connection--------------------------------------------------------------------------------------------------
    let mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/test', 
        {useNewUrlParser: true, useUnifiedTopology: true}
    );

//  cors & parse--------------------------------------------------------------------------------------------------
    let cors = require('cors');
    app.use(cors()); 
    let bodyParser = require('body-parser'); 
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

//  routing --------------------------------------------------------------------------------------------------
    let galleryRouter = require('../api/routes/gallery');
    let helloRouter = require('../api/routes/hello');
    //register the routes
    galleryRouter(app);
    helloRouter(app);
    app.use('/gallery', galleryRouter);
    app.use('/hello', helloRouter);
    //app.use('/hello/:name', helloRouter);

//  port --------------------------------------------------------------------------------------------------
    //let port = process.env.PORT || 3001;
    //app.listen(port);
    //console.log('todo list RESTful API server started on: ' + port);

    module.exports = app;

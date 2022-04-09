const express = require('express');
const session = require('express-session');
const flash = require('express-flash-messages');
const app = express();
const port = 3000;


app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/js/users',express.static('./views/users/users.js'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
      secret: '123',
      name: 'appSession',
      resave: true,
      saveUninitialized: true,
    })
  );
app.use(flash());
app.set('views', './views');
app.set('view engine', 'pug');

app.use('/users',require('./controllers/user-controller'));
app.listen(port,()=>{
    console.log("server start")
})
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, "views"));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes')); //ejecuta el index.js por predeterminado

//Public
app.use(express.static(path.join(__dirname, "public")));

//Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on port: ", app.get('port'));
});
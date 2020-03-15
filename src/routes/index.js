const express = require('express');
const session = require('express-session');

const router = express.Router();
const app = express();
const data = require('./false_database');

app.use(session({
    secret: "1234",
    resave: true,
    saveUninitialized: true
}));

router.get('/', (req, res) => {
    res.render('secondaries/login');
});

router.post('/signin', (req, res) => {
    for (i = 0; i < data.length; i++) {
        if (req.body.username == data[i].username && req.body.username == data[i].pwd) {
            session.username = req.body.username;
            //req.flash('success', 'Ingreso con exito');
            res.render('secondaries/home', { user: data[i].fullname });
            break;
        }
        else {
            res.render('secondaries/login', { no_existe_user: true });
            break;
        }
    }
});

module.exports = router;
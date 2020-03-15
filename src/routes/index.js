const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('secondaries/login');
});

module.exports = router;
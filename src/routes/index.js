const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.get('/version', (req, res) => {
    res.send('1.0');
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/server', (req, res) => res.send('Server is up and runnnig.'))

module.exports = router;
'use strict';
const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const spaForm = req.body;
    res.status(200).end();
});

module.exports = router;

const express = require('express');
const router = express();
const userInfo = require('../api/user');
router.get('/userInfo', userInfo);


module.exports = router;
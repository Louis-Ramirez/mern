const express = require('express');
const router = express.Router();

//req=request, res=response

//@route  GET api/profile
//@desc   Test route
//@access Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;

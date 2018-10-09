const express = require('express')
//const router = express.Router()

/* GET users listing. */

exports.getUsers = function (req, res, next) {
    res.json({users: [{name: 'Timmy'}]})
}

//module.exports = router

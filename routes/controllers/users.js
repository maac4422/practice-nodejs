const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('../../db/mongoose')
const {User} = require('../../db/models/user')
//const router = express.Router()

/* GET users listing. */

exports.getUsers = function (req, res, next) {
    res.json({users: [{name: 'Timmy'}]})
}

//module.exports = router

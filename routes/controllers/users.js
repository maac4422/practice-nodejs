const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('../../db/mongoose')
const {User} = require('../../db/models/user')
//const router = express.Router()

/* GET users listing. */

exports.getUsers = function (req, res, next) {
    User.find().then((users) => {
        res.send({users})
    },(e) => {
        res.status(400).send(e)
    })
}

//module.exports = router

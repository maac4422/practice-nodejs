const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('../../db/mongoose')
const {User} = require('../../db/models/products')

/* GET products listing. */

exports.getProducts = function (req, res, next) {
    User.find().then((products) => {
        res.send({products})
    },(e) => {
        res.status(400).send(e)
    })
}

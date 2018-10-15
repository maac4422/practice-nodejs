const express = require('express')
const bodyParser = require('body-parser')
const lodash = require('lodash');

const {mongoose} = require('../../db/mongoose')
const {User} = require('../../db/models/user')


/* GET users listing. */

exports.getUsers = function (req, res, next) {
    User.find().then((users) => {
        res.send({users})
    },(e) => {
        res.status(400).send(e)
    })
}

exports.postUser = function(req,res,next){
    let body = lodash.pick(req.body, ['email', 'password']);
    let user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
}


exports.loginUser = function(req,res,next){
    let body = lodash.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
        //res.send({user})
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
        res.status(400).send(e);
    });
}

exports.getCurrentUser = function(req,res,next){
    res.send(req.user);
}

exports.logoutUser = function(req,res,next){

}
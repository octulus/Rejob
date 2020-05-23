const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    const userData = {
        first_name: req.body.Name,
        email: req.body.email,
        password: req.body.password,
        country: req.body.country
    }

    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(UserData)
                .then(user => {
                    res.json({status: user.email + 'registered'})
                })
                .catch(err => {
                    res.send('error', err)
                })
            })
        } else {
            res.json({error: 'User already exists'})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                const payload = {
                    _id: user._id,
                    Name: user.Name,
                    email: user.email,
                    country: user.country
                }
                let token = jwt.sign(payload, precess.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            } else {
                res.json({error: "User does not exist"})
            }
        }
    })
    .catch (err => {
        res.send('error' + err)
    })
})

users.get('/profile', (req, res) => {
    let decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        _id: decoded._id
    })
    .then(user => {
        if (user) {
            res.json(user)
        } else {
            res.send("User does not exist")
        }
    })
    .catch(err => {
        res.send('error' + err)
    })
})

module.exports = users
var express = require('express');
var router = express.Router();


const listGender = [{
    name: 'Homme'
}, {
    name: 'Femme'
}]

const listCategorie = [{
    name: 'T-Shirt'
}, {
    name: 'Jeans'
}, {
    name: 'Chaussures'
}, {
    name: 'Pull'
}, {
    name: 'Costumes'
}]

const listAuth = []

const listUsers = [{
    prenom : ' ',
    mail : ' ',
    mdp : ' '
}]

router.get('/listCategorie', (req, res) => {
    res.json(listCategorie)
})

router.get('/listGender', (req, res) => {
    res.json(listGender)
})
router.get('/listUsers', (req, res) => {
    res.json(listUsers)
})

router.post('/listUsers', (req, res) => {
    listUsers.push({
        prenom: req.body.prenom,
        mail: req.body.mail,
        mdp: req.body.mdp
    })
    res.send('OK')
})

router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    if (email === 'louis' || password === 'secret') {
        listAuth.push ({
            email : email,
            password : password,
        })
        res.redirect('/')
    } else {
        res.status(400).send('Bouuuh mauvais mdp')
    }
    console.log(listAuth.length)
})

router.get('/listAuth', (req, res) => {
    res.json(listAuth)
})


module.exports = router;

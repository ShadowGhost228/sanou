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
    prenom : 'root',
    mail : 'root@gmail.com',
    mdp : 'root'
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


    if (researchUserForRegister(mail) != true) {
        listUsers.push({
            prenom: req.body.prenom,
            mail: req.body.mail,
            mdp: req.body.mdp
        })
    }
    else{

        res.status(400).send('Mail déjà utilisé')

    }

    res.redirect('/login')
})

router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    var user = research(email,password)
    console.log('Utilisateur', user)

    if (user != '') {
        listAuth.push ({
            email : email,
            password : password,
        })
        console.log('Utilisateur', user)
        router.get('/user', (req, res) => { res.send(user) })
        res.redirect('/')
    } else {
        res.status(400).send('Bouuuh mauvais mdp')
    }
    console.log(listAuth.length)
})

router.get('/listAuth', (req, res) => {
    res.json(listAuth)
})



function research(email, password){
    var user = ''
    for (i = 0; i<listUsers.length; i++){
        if( email === listUsers[i].mail && password === listUsers[i].mdp){
            user = listUsers[i]
        }
    }
    return user
}

function researchUserForRegister(email){

    for (i = 0; i<listUsers.length; i++){
        if( email === listUsers[i].mai){
           return true
        }
    }
    return false
}

module.exports = router;

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

const listProducts = [
    {
        url : '',
        title : '',
        category : '',
        gender : '',
        price : '',
        number : '',
    }
]

router.get('/listCategorie', (req, res) => {
    res.json(listCategorie)
})

router.get('/listGender', (req, res) => {
    res.json(listGender)
})
router.get('/listUsers', (req, res) => {
    res.json(listUsers)
})

router.post('/register', (req, res) => {
    const prenom = req.body.prenom
    const mail = req.body.mail
    const mdp = req.body.mdp

    var user = researchUserForRegister(mail)
    console.log('Valeur de user', user)

    if (user == '' ) {
        listUsers.push({
            prenom: prenom,
            mail: mail,
            mdp: mdp
        })
        //res.redirect('/login')
    } else{
        res.status(400).send('Mail déjà utilisé')
    }

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
        user = ''
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

    var user = ''
    for (i = 0; i<listUsers.length; i++){
        if( email === listUsers[i].mail){
           user = listUsers[i]
        }
    }
    return user
}

module.exports = router;

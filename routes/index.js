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
        url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg',
        title : 'Denim shirt',
        category : 'Shirt',
        gender : 'femme',
        price : '120$',
        number : '1',
    },
    {
        url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg',
        title : 'Sweatshirt',
        category : 'Sport wear',
        gender : 'homme',
        price : '139$',
        number : '2',
    },
    {
        url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
        title : 'Grey blouse bestseller',
        category : 'Sport wear',
        gender : 'homme',
        price : '99$',
        number : '3',
    },
    {
        url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg',
        title : 'Denim shirt',
        category : 'Grey blouse',
        gender : 'femme',
        price : '120$',
        number : '4',
    },
    {
        url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg',
        title : 'Black Jacket',
        category : 'Shirt',
        gender : 'femme',
        price : '40$',
        number : '5',
    },
    {
        url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg',
        title : 'Denim shirt',
        category : 'Shirt',
        gender : 'homme',
        price : '170$',
        number : '6',
    }
    ,
    {
        url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg',
        title : 'Denim shirt',
        category : 'Shirt',
        gender : 'homme',
        price : '140$',
        number : '7',
    },
    ,
    {
        url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg',
        title : 'Denim',
        category : 'Shirt',
        gender : 'homme',
        price : '220$',
        number : '8',
    },
    ,
    {
        url : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg',
        title : 'Shirt',
        category : 'Shirt',
        gender : 'homme',
        price : '130$',
        number : '9',
    },
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

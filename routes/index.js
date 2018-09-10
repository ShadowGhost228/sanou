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
/*const lists = [ [{name: 'Homme'}, {name: 'Femme'}],
                [{name: 'T-Shirt'}, {name: 'Jeans'}, {name: 'Chaussures'}, {name: 'Pull'}, {name: 'Costumes'}]
            ]
*/
const listUsers = [{
    prenom : ' ',
    mail : ' ',
    motDePasse : ' '
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
        motDePasse: req.body.motDePasse
    })
    res.send('OK')
})

router.post('/signin', (req, res) => {

})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;

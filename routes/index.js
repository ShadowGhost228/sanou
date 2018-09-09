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
    name : 'Erick',
    email : 'erick@esiea.fr',
    password : 'root'
}, {
    name : 'Richard',
    email : 'richard@esiea.fr',
    password : 'root'
}, {
    name : 'Ivanick',
    email : 'ivanick@esiea.fr',
    password : 'root'
}]

router.get('/listCategorie', (req, res) => {
    res.json(listCategorie)
})

router.get('/listGender', (req, res) => {
    res.json(listGender)
})

router.post('/list', (req, res) => {
    list.push({
        name: req.body.name
    })
    res.send('OK')
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;

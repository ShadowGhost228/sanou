var express = require('express');
var router = express.Router();

const list = [{
    name: 'Homme'
}, {
    name: 'Femme'
}]

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

router.get('/list', (req, res) => {
    res.json(list)
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

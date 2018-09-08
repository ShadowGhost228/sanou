var express = require('express');
var router = express.Router();

const list = [{
    name: 'elemqsdqsdqs1'
}, {
    name: 'elem2qsdqsdqsd'
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

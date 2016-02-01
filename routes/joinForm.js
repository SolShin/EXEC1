/**
 * Created by ss-pc on 2016-02-01.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('joinForm', {title:'회원가입'});
    //res.send('정상중');
});

router.post('/', function(req, res, next) {
    console.log('req.body : '+req.body);
    res.json(req.body);
});



module.exports = router;

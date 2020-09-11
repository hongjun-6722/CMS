const router = require('koa-router')();
const add = require('../controller/addData.js')
const login = require('../controller/login.js')

router
    .get('/add', add.addData)
    .get('/getdata', add.getData)
    .get('/del',add.delData)
    .get('/change',add.changeData)
    .post('/user',login.login)
module.exports = router
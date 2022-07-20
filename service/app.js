//服务器配置
const Router = require('koa-router')
const router = new Router()
const Koa = require('koa2')
const app = new Koa() // 创建koa2实例

var bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const apirouter = require('./router/index.js')
app.use(router.routes()).use(router.allowedMethods())
app.use(apirouter.routes())


app.use(async (ctx) => {
    ctx.body = 'hello koa2'
    console.log('ko2')
})

//监听3000端口
app.listen(3000)
console.log('listening at 3000')
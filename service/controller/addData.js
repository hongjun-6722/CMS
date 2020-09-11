const pool = require('../database/mysql');
const {query} = pool;

//查询，无参数时搜索全部
async function getData(ctx, next) {
    let  key  = ctx.request.query || ctx.query
    if(!key.name){sql = `SELECT * from roster`}
    else{sql = `SELECT * from roster where name = '${key.name}'`}
    let data = await query(sql)
    ctx.body = {
        data: data,
        status: '121',
    }
}
//增加
async function addData(ctx, next) {
    let  key  = ctx.request.query || ctx.query
    if(!key.age){key.age = 0}
    if(!key.name){key.name = ''}
    if(!key.qq){key.qq=''}
    let sql = `insert into roster(name,age,qq) values('${key.name}',${key.age},'${key.qq}');`
    let data = await query(sql)
    ctx.body = {
        data: data,
        status: '122'
    }
}
//删除
async function delData(ctx, next) {
    let  index  = ctx.request.query || ctx.query
    let sql = `delete from roster where id=${index.del};`
    let data = await query(sql)
    ctx.body = {
        data: data,
        status: '123'
    }
}
//修改
async function changeData(ctx, next) {
    let  key  = ctx.request.query || ctx.query
    if(!key.age){key.age = 0}
    if(!key.name){key.name = ''}
    if(!key.qq){key.qq=''} 
    let sql = `update roster set name='${key.name}',age=${key.age},qq='${key.qq}' where id=${key.change};`
    let data = await query(sql)
    ctx.body = {
        data: data,
        status: '124'
    }
}
module.exports = {
    getData,addData,delData,changeData
}
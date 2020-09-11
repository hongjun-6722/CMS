const pool = require('../database/mysql');
const {query} = pool;

async function login(ctx, next) {
    let  key  = ctx.request.body
    if(!key){sql = `SELECT * from user`}
    else{ sql = `SELECT * from user where user = ${key.user} and pwd =${key.pwd}`}
    let data = await query(sql)
    if(data.id!=0){status=131}
    ctx.body = {
        data: data,
        status,
    }
}
module.exports = {
    login,
}
const mysql = require('mysql')
const init = require('../database/init')
// 创建连接池
const pool = mysql.createPool({
    host: init.host,
    user: init.user,
    password: init.password,
    database: init.database
});
// 使用promise封装
const query = function(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if(err) {
                console.log(err)
                resolve(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if(err) {
                        console.log(err)
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = {query}
'use strict';

var CONF = require('../conf');

const { Pool, Client } = require('pg')


const pool = new Pool({
    user:CONF.user,
    password:CONF.password,
    host: CONF.host,
    database: CONF.database,
    port: CONF.port,
})

exports.login = (req, response) =>{
    pool.connect().then(client=>{
        client.query('SELECT * from utilisateur where login =$1',[req.body.login]).then((res) => {
            if(req.body.password===res.rows[0].password){
                response.json(res.rows[0])
            }else{
                response.json({etat:"false"})
            }
            client.end()
          })
    })
};

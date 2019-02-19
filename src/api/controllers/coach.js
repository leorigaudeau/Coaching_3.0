'use strict';

var CONF = require('../conf');

const { Pool, Client } = require('pg')

const client = new Pool({
    user:CONF.user,
    password:CONF.password,
    host: CONF.host,
    database: CONF.database,
    port: CONF.port,
})

exports.get_all_coached = (req, response) =>{
    client.connect().then(client=>{ //id_coach
            client.query('SELECT * from utilisateur where id_coach =$1',[req.body.id]).then((res) => {
                response.json(res.rows)
                client.end()
            });
    });
};
/*
exports.add_new_coached = (req, response) =>{
    client.connect().then(client=>{
        client.query('SELECT * from utilisateur').then((res) => {
        response.json(res.rows)
        client.end()
    })
})*/


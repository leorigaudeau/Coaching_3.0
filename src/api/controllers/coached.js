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

exports.getSkillsByUserId = (req, response) =>{
    pool.connect().then(client=>{
        client.query('SELECT * FROM skills WHERE id_user =$1',[req.body.id_user]).then((res) => {
            response.json(res.rows[0])
            client.end()
          })
    })
};

exports.getSoftSkills = (req, response) =>{
    pool.connect().then(client=>{
        client.query('SELECT * FROM softskill').then((res) => {
            response.json(res.rows[0])
            client.end()
          })
    })
};

exports.addUser = (req, response) =>{
    pool.connect().then(client=>{
        client.query('INSERT INTO utilisateur (id_user,nom,prenom,login,id_role,id_coach,id_entreprise) VALUES (\'$1\',\'$2\',\'$3\',\'$4\',\'$5\',\'$6\',\'$7\'',[req.body.id_user],[req.body.nom],[req.body.prenom],[req.body.login],[req.body.id_role],[req.body.id_coach],[req.body.id_entreprise]).then((res) => {
            response.json(res.rows[0])
            client.end()
          })
    })
};


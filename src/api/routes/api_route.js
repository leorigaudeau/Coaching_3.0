'use strict';
module.exports = function(app) {
  var login = require('../controllers/login.js');
  var coach = require('../controllers/coach.js');
  var coached = require('../controllers/coached.js');

  // todoList Routes
  app.route('/login')
    .post(login.login);
  
  app.route('/coach')
    .get(coach.get_all_coached);

  app.route('/getSoftSkills')
    .get(coached.getSoftSkills);
/*
  app.route('/collaborateur')
    .get(test.list_all_tasks);*/
};

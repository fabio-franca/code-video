const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
 
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Cliente = require('../models/cliente.model.js')(sequelize, Sequelize);
db.Posts = require('../models/posts.model')(sequelize, Sequelize);
db.Comments = require("../models/comments.model")(sequelize, Sequelize);

module.exports = db;

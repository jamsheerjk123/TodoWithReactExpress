const path = require('path');
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(`${__dirname}/db.env`)})
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASS, {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql"
});
sequelize.sync()
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;

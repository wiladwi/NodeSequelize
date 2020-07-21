const dbConfig = require ("../config/db.config")
const Sequelize = require ("sequelize")


//Initialize Sequelize
const sequel = new Sequelize (dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host : dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorsAliases : false,
    pool :{
        max : dbConfig.pool.max,
        min : dbConfig.pool.min,
        acquire : dbConfig.pool.acquire,
        idle : dbConfig.pool.idle
    }
})

const db ={}

db.Sequelize = Sequelize;
db.sequel = sequel;

db.tuturials = require ("./tutorial.model.js")(sequel.Sequelize);

module.exports;
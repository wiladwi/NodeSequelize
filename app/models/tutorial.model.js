const { Sequelize } = require("sequelize/types");

module.exports = (sequel,Sequelize)=>{
    const Tutorial = sequel.define ("tutorial",{
        title : {
            type : Sequelize.STRING
        },
        description : {
            type : Sequelize.STRING
        },
        published : {
            type : Sequelize.STRING
        }
    }) ;

    return Tutorial;
}
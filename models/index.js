const {Sequelize, DataTypes} = require('sequelize')


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,{
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
)

try{
    sequelize.authenticate();
    console.log("connection has been established successfully")
} catch(error){
    console.error('Unable to connect to the database:', error)
}


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

//models will be here
db.users = require('./userModel')(sequelize, DataTypes)
db.products = require('./productModel')(sequelize, DataTypes)
db.variants = require('./variantModel')(sequelize, DataTypes)

db.products.hasMany(db.variants, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})

db.sequelize.sync({force: false})
.then(()=>{
    console.log("database has beend synced")
}).catch((err)=>{
    console.log(err)
})


module.exports = db
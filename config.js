const {Sequelize,DataTypes} = require('sequelize')

/**
 * 1st parameter - database name
 * 2nd parameter - DB username
 * 3ed parameter - password 
 */
const sequelize = new Sequelize('wishlist','postgres','3235',{
    host:'127.0.0.1',
    dialect:'postgres',
    port:5433,
    //logging: false                //no queries will be logged in console
    
})

sequelize.authenticate().then(()=>console.log("connected")).catch((err)=>console.log("Error "+err))

const db={}
db.Sequelize =Sequelize
db.sequelize = sequelize
db.admin = require('./models/admin')(sequelize,DataTypes)
/**
 * When sync() is invoked without passing any object then table will be created if table doesn't exists.
 * When sync({forced:true}) if table exists if dropped first than created
 * Suppose we want to create table with fresh data for a test environment. where table name should contain "test", then use db.sequelize.sync({force:true,match:/test$/}) it will delete data only if table name is matched
 */
db.sequelize.sync().then(()=>console.log("Data re-sync")) 
module.exports=db
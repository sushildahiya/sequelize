module.exports = (sequelize,DataTypes)=>{
    const Admin = sequelize.define("admin",{
        name:DataTypes.STRING,
        email:{
            type: DataTypes.STRING,
            defaultValue:"test@gmail.com"
        },
        gender:{
            type: DataTypes.STRING
        }
    },{
        timestamp: false            //createdAt and updatedAt column will not be generated
        //updatedAt: false             //updated column will not be created
        //createdAt: 'created_at        //changes the field name to created_at
        //tableName: 'user_data'        //to change the table name
    })
    return Admin
}
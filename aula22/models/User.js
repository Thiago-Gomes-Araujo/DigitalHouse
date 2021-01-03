
module.exports = (sequelize, DataType) =>{

    const User = sequelize.define(
        "User",
        {
            id:{
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name:{
                type: DataType.STRING,
                allowNull: false
            },
            email:{
                type: DataType.STRING,
                password: DataType.STRING(255)
                
            },
            password:{
                type: DataType.STRING(255)  
            }
            
               
        }
        
    );

    return User;
}
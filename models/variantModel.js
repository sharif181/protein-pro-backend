module.exports = (sequelize, DataTypes) =>{
    const Variant = sequelize.define("variant", {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
        
    })
    return Variant
}
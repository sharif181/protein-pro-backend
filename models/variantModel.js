module.exports = (sequelize, DataTypes) =>{
    const Variant = sequelize.define("variant", {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stripe_price_id:{
            type: DataTypes.STRING,
            allowNull: false
        }
        
    })
    return Variant
}
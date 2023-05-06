module.exports = (sequelize, DataTypes) =>{
    const Variant = sequelize.define("variant", {
        pckage_pkg:{
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        stripe_price_id:{
            type: DataTypes.STRING,
            allowNull: true
        },
        variant_type: {
            type: DataTypes.STRING,
            allowNull: true
        }
        
    })
    return Variant
}
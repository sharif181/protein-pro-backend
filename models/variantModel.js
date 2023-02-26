module.exports = (sequelize, DataTypes) =>{
    const Variant = sequelize.define("variant", {
        region:{
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
        position: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rate: {
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
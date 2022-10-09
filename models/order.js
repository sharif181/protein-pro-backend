module.exports = (sequelize, DataTypes) =>{
    const Order = sequelize.define("order", {
        product_id:{
            type: DataTypes.STRING
        },
        variant_id: {
            type: DataTypes.STRING
        },
        quantity:{
            type: DataTypes.INTEGER
        }
    })
    return Order
}
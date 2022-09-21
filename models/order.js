module.exports = (sequelize, DataTypes) =>{
    const Order = sequelize.define("order", {
        product:{
            type: DataTypes.STRING
        },
        variant: {
            type: DataTypes.STRING
        },
        quantity:{
            type: DataTypes.INTEGER
        },
        total_amount:{
            type: DataTypes.FLOAT,
            allowNull: true
        }
        
    })
    return Order
}
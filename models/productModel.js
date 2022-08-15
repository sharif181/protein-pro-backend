module.exports = (sequelize, DataTypes) =>{
    const Product = sequelize.define("product", {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        product_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    })
    return Product
}
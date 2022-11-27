module.exports = (sequelize, DataTypes) =>{
    const Product = sequelize.define("product", {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        product_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stripe_pro_id:{
            type: DataTypes.STRING,
            allowNull: false
        },
        image_path:{
            type: DataTypes.STRING,
            allowNull: false
        },
        checkout_image_path:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Product
}
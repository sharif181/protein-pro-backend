module.exports = (sequelize, DataTypes) =>{
    const Product = sequelize.define("product", {
        organism_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        protein_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        amino_acids:{
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
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
        },
        complimentary:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return Product
}
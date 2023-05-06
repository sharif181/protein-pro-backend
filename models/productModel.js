module.exports = (sequelize, DataTypes) =>{
    const Product = sequelize.define("product", {
        organism_name:{
            type: DataTypes.STRING,
            allowNull: true
        },
        protein_name:{
            type: DataTypes.STRING,
            allowNull: true
        },
        amino_acids:{
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stripe_pro_id:{
            type: DataTypes.STRING,
            allowNull: true
        },
        image_path:{
            type: DataTypes.STRING,
            allowNull: true
        },
        checkout_image_path:{
            type: DataTypes.STRING,
            allowNull: true
        },
        complimentary:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        pms_tables:{
            type: DataTypes.STRING,
            allowNull: true
        },
        pmr_tables:{
            type: DataTypes.STRING,
            allowNull: true
        },
        pmr_positions:{
            type: DataTypes.STRING,
            allowNull: true
        },
        ncbi_id:{
            type: DataTypes.STRING,
            allowNull: true
        },
        uniport_id:{
            type: DataTypes.STRING,
            allowNull: true
        }

    })
    return Product
}
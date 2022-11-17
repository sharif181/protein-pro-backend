module.exports = (sequelize, DataTypes) =>{
    const protein_3_table = sequelize.define("protein_3_table", {
        position:{
            type: DataTypes.STRING,
            allowNull: false
        },
        amino_acid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amino_acid_1_ltr:{
            type: DataTypes.STRING,
            allowNull: false
        },
        amino_acid_3_ltr:{
            type: DataTypes.STRING,
            allowNull: false
        },
        sub:{
            type: DataTypes.STRING,
            allowNull: false
        },
        sub_1_ltr:{
            type: DataTypes.STRING,
            allowNull: false
        },
        sub_3_ltr:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ag:{
            type: DataTypes.STRING,
            allowNull: false
        },
        region:{
            type: DataTypes.STRING,
            allowNull: false
        },
        labs:{
            type: DataTypes.STRING,
            allowNull: false
        },
        design_asset:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return protein_3_table
}
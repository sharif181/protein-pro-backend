module.exports = (sequelize, DataTypes) =>{
    const proteinTable = sequelize.define("proteinTable", {
        position:{
            type: DataTypes.STRING,
            allowNull: true
        },
        amino_acid: {
            type: DataTypes.STRING,
            allowNull: true
        },
        amino_acid_1_ltr:{
            type: DataTypes.STRING,
            allowNull: true
        },
        amino_acid_3_ltr:{
            type: DataTypes.STRING,
            allowNull: true
        },
        sub:{
            type: DataTypes.STRING,
            allowNull: true
        },
        sub_1_ltr:{
            type: DataTypes.STRING,
            allowNull: true
        },
        sub_3_ltr:{
            type: DataTypes.STRING,
            allowNull: true
        },
        ag:{
            type: DataTypes.STRING,
            allowNull: true
        },
        region:{
            type: DataTypes.STRING,
            allowNull: true
        },
        labs:{
            type: DataTypes.STRING,
            allowNull: true
        },
        design_asset:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return proteinTable
}
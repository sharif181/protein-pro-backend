module.exports = (sequelize, DataTypes) =>{
    const protein_5_table = sequelize.define("protein_5_table", {
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
        Seq_AOL:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Seq_Sub:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Seq_1_ltr:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Seq_3_ltr:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Seq_AG:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Seq_SOL:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Seq_Sub_Table:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Reg_Sub:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Reg_1_ltr:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Reg_3_ltr:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Reg_AG:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Reg_SOL:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Reg_Sub_Table:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return protein_5_table
}
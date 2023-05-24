module.exports = (sequelize, DataTypes) =>{
    const csvName = sequelize.define("csvName", {
        table_name:{
            type: DataTypes.STRING,
            allowNull: true
        },
        file_name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return csvName
}
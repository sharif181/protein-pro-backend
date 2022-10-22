module.exports = (sequelize, DataTypes) =>{
    const ContactUs = sequelize.define("contact_us", {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message:{
            type: DataTypes.STRING,
            allowNull: false
        },
        map_location:{
            type: DataTypes.JSON,
            allowNull: false
        },
        user_id:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return ContactUs
}
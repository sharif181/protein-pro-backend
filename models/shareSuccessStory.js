module.exports = (sequelize, DataTypes) =>{
    const ShareSuccessStory = sequelize.define("share_sucess_story", {
        answer1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        answer2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        answer3:{
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id:{
            type: DataTypes.STRING,
            allowNull: false
        },
        user_email:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return ShareSuccessStory
}
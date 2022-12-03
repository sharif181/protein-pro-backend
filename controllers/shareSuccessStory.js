const db = require('../models')

const User = db.users

const ShareSucessStory = db.shareSucessStory

const addShareSucessStory = async (req, res)=>{
    const user = await User.findByPk(req.body.user_id)
    let data = {
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        user_id: req.body.user_id,
        user_email: user.email
    }
    await ShareSucessStory.create(data).then((story)=>{
        return res.status(200).send(story)
    }).catch((err)=>{
        console.log(err);
        res.status(400).send({"message": err.errors[0].message})
    })
}

const allStories = async (req, res)=>{
    let stories = await ShareSucessStory.findAll()
    return res.status(200).send(stories)
}

module.exports = {addShareSucessStory, allStories}
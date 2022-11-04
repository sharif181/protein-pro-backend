const db = require('../models')
const {Sequelize} = require('sequelize')

const table=db.proteinTable


const proteinLabGraph = async(req, res)=>{
    const region = parseInt(req.body.region)
    const lowPosition = parseInt(req.body.lowPosition)
    const highPosition = parseInt(req.body.highPosition)
    const amino = req.body.amino
    const sub = req.body.sub
    if(region == 0){
        const list = await table.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
                amino_acid_1_ltr: amino,
                sub_1_ltr: sub
            },
        })
        return res.status(200).send(list)
    }
    const list = await table.findAll({
        where:{
            position:{
                [Sequelize.Op.gt]:lowPosition-1,
                [Sequelize.Op.lt]:highPosition+1
            },
            region: region,
            amino_acid_1_ltr: amino,
            sub_1_ltr: sub
        },
    })
    return res.status(200).send(list)
}

module.exports={proteinLabGraph}
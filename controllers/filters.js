const db = require('../models')
const {Sequelize} = require('sequelize')

const table=db.proteinTable
const table_2=db.protein_2_table
const table_3=db.protein_3_table
const table_4=db.protein_4_table
const table_5=db.protein_5_table


const proteinLabGraph = async(req, res)=>{
    const region = parseInt(req.body.region)
    const lowPosition = parseInt(req.body.lowPosition)
    const highPosition = parseInt(req.body.highPosition)
    // const amino = req.body.amino
    // const sub = req.body.sub
    if(region == 0){
        const list = await table.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
                // amino_acid_1_ltr: amino,
                // sub_1_ltr: sub
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
            // amino_acid_1_ltr: amino,
            // sub_1_ltr: sub
        },
    })
    return res.status(200).send(list)
}

const protein_2_LabGraph = async(req, res)=>{
    const region = parseInt(req.body.region)
    const lowPosition = parseInt(req.body.lowPosition)
    const highPosition = parseInt(req.body.highPosition)
    // const amino = req.body.amino
    // const sub = req.body.sub
    if(region == 0){
        const list = await table_2.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
                // amino_acid_1_ltr: amino,
                // sub_1_ltr: sub
            },
        })
        return res.status(200).send(list)
    }
    const list = await table_2.findAll({
        where:{
            position:{
                [Sequelize.Op.gt]:lowPosition-1,
                [Sequelize.Op.lt]:highPosition+1
            },
            region: region,
            // amino_acid_1_ltr: amino,
            // sub_1_ltr: sub
        },
    })
    return res.status(200).send(list)
}

const protein_3_LabGraph = async(req, res)=>{
    const region = parseInt(req.body.region)
    const lowPosition = parseInt(req.body.lowPosition)
    const highPosition = parseInt(req.body.highPosition)
    // const amino = req.body.amino
    // const sub = req.body.sub
    if(region == 0){
        const list = await table_3.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
                // amino_acid_1_ltr: amino,
                // sub_1_ltr: sub
            },
        })
        return res.status(200).send(list)
    }
    const list = await table_3.findAll({
        where:{
            position:{
                [Sequelize.Op.gt]:lowPosition-1,
                [Sequelize.Op.lt]:highPosition+1
            },
            region: region,
            // amino_acid_1_ltr: amino,
            // sub_1_ltr: sub
        },
    })
    return res.status(200).send(list)
}

const protein_4_LabGraph = async(req, res)=>{
    const region = parseInt(req.body.region)
    const lowPosition = parseInt(req.body.lowPosition)
    const highPosition = parseInt(req.body.highPosition)
    // const amino = req.body.amino
    // const sub = req.body.sub
    if(region == 0){
        const list = await table_4.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
                // amino_acid_1_ltr: amino,
                // sub_1_ltr: sub
            },
        })
        return res.status(200).send(list)
    }
    const list = await table_4.findAll({
        where:{
            position:{
                [Sequelize.Op.gt]:lowPosition-1,
                [Sequelize.Op.lt]:highPosition+1
            },
            region: region,
            // amino_acid_1_ltr: amino,
            // sub_1_ltr: sub
        },
    })
    return res.status(200).send(list)
}

const protein_5_LabGraph = async(req, res)=>{
    const region = parseInt(req.body.region)
    const lowPosition = parseInt(req.body.lowPosition)
    const highPosition = parseInt(req.body.highPosition)
    // const amino = req.body.amino
    // const sub = req.body.sub
    if(region == 0){
        const list = await table_5.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
                // amino_acid_1_ltr: amino,
                // sub_1_ltr: sub
            },
        })
        return res.status(200).send(list)
    }
    const list = await table_5.findAll({
        where:{
            position:{
                [Sequelize.Op.gt]:lowPosition-1,
                [Sequelize.Op.lt]:highPosition+1
            },
            region: region,
            // amino_acid_1_ltr: amino,
            // sub_1_ltr: sub
        },
    })
    return res.status(200).send(list)
}

module.exports={proteinLabGraph, protein_2_LabGraph, protein_3_LabGraph, protein_4_LabGraph, protein_5_LabGraph}
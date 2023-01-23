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
    let is_region = false
    let list = null
    if(region == 0){
        list = await table.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
            },
        })
        is_region = true
    }else{
        list = await table.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
                region: region,
            },
        })
    }
    let graph_data = null
    if (is_region){
        graph_data = list.map((item)=>{
            return item.region
        })
    }else{
        graph_data = list.map((item)=>{
            return item.ag
        })
    }
    return res.status(200).send({"all_data": list, "graph_data": graph_data})
}

const protein_2_LabGraph = async(req, res)=>{
    const region = parseInt(req.body.region)
    const lowPosition = parseInt(req.body.lowPosition)
    const highPosition = parseInt(req.body.highPosition)
    let is_region = false
    let list = null
    if(region == 0){
        list = await table_2.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
            },
        })
        is_region = true
    }else{
        list = await table_2.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
                region: region,
            },
        })
    }
    let graph_data = null
    if (is_region){
        graph_data = list.map((item)=>{
            return item.region
        })
    }else{
        graph_data = list.map((item)=>{
            return item.ag
        })
    }
    return res.status(200).send({"all_data": list, "graph_data": graph_data})
}

const protein_3_LabGraph = async(req, res)=>{
    const region = parseInt(req.body.region)
    const lowPosition = parseInt(req.body.lowPosition)
    const highPosition = parseInt(req.body.highPosition)
    let is_region = false
    let list = null
    if(region == 0){
        list = await table_3.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
            },
        })
        is_region = true
    }else{
        list = await table_3.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
                region: region,
            },
        })
    }
    let graph_data = null
    if (is_region){
        graph_data = list.map((item)=>{
            return item.region
        })
    }else{
        graph_data = list.map((item)=>{
            return item.ag
        })
    }
    return res.status(200).send({"all_data": list, "graph_data": graph_data})
}

const protein_4_LabGraph = async(req, res)=>{
    const region = parseInt(req.body.region)
    const lowPosition = parseInt(req.body.lowPosition)
    const highPosition = parseInt(req.body.highPosition)
    let is_region = false
    let list = null
    if(region == 0){
        list = await table_4.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
            },
        })
        is_region = true
    }else{
        list = await table_4.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
                region: region,
            },
        })
    }
    let graph_data = null
    if (is_region){
        graph_data = list.map((item)=>{
            return item.region
        })
    }else{
        graph_data = list.map((item)=>{
            return item.ag
        })
    }
    return res.status(200).send({"all_data": list, "graph_data": graph_data})
}

const protein_5_LabGraph = async(req, res)=>{
    const region = parseInt(req.body.region)
    const lowPosition = parseInt(req.body.lowPosition)
    const highPosition = parseInt(req.body.highPosition)
    let is_region = false
    let list = null
    if(region == 0){
        list = await table_5.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
            },
        })
        is_region = true
    }else{
        list = await table_5.findAll({
            where:{
                position:{
                    [Sequelize.Op.gt]:lowPosition-1,
                    [Sequelize.Op.lt]:highPosition+1
                },
                region: region,
            },
        })
    }
    let graph_data = null
    if (is_region){
        graph_data = list.map((item)=>{
            return item.region
        })
    }else{
        graph_data = list.map((item)=>{
            return item.ag
        })
    }
    return res.status(200).send({"all_data": list, "graph_data": graph_data})
}


const protein_1_query = async(req, res)=>{
    const position = parseInt(req.body.position)
    const object_data = await table.findOne({
        where:{
            position: position,
        },
    })
    if(object_data){
        return res.status(200).send(object_data)
    }
    return res.status(200).send({"message": "no data"})
    
}

const protein_2_query = async(req, res)=>{
    const position = parseInt(req.body.position)
    const object_data = await table_2.findOne({
        where:{
            position: position,
        },
    })
    if(object_data){
        return res.status(200).send(object_data)
    }
    return res.status(200).send({"message": "no data"})
    
}

const protein_3_query = async(req, res)=>{
    const position = parseInt(req.body.position)
    const object_data = await table_3.findOne({
        where:{
            position: position,
        },
    })
    if(object_data){
        return res.status(200).send(object_data)
    }
    return res.status(200).send({"message": "no data"})
    
}


const protein_4_query = async(req, res)=>{
    const position = parseInt(req.body.position)
    const object_data = await table_4.findOne({
        where:{
            position: position,
        },
    })
    if(object_data){
        return res.status(200).send(object_data)
    }
    return res.status(200).send({"message": "no data"})
    
}

const protein_5_query = async(req, res)=>{
    const position = parseInt(req.body.position)
    const object_data = await table_5.findOne({
        where:{
            position: position,
        },
    })
    if(object_data){
        return res.status(200).send(object_data)
    }
    return res.status(200).send({"message": "no data"})
    
}


const position_low_max = async(req, res) =>{
    let result = {}
    let list = await table.findAll()
    let min_val = Math.min(...list.map(o => parseInt(o.position)))
    let max_val = Math.max(...list.map(o => parseInt(o.position)))
    result['spike_table'] = {"min": min_val, "max": max_val}
    
    list = await table_2.findAll()
    min_val = Math.min(...list.map(o => parseInt(o.position)))
    max_val = Math.max(...list.map(o => parseInt(o.position)))
    result['table_2'] = {"min": min_val, "max": max_val}

    list = await table_3.findAll()
    min_val = Math.min(...list.map(o => parseInt(o.position)))
    max_val = Math.max(...list.map(o => parseInt(o.position)))
    result['table_3'] = {"min": min_val, "max": max_val}

    list = await table_4.findAll()
    min_val = Math.min(...list.map(o => parseInt(o.position)))
    max_val = Math.max(...list.map(o => parseInt(o.position)))
    result['table_4'] = {"min": min_val, "max": max_val}

    list = await table_5.findAll()
    min_val = Math.min(...list.map(o => parseInt(o.position)))
    max_val = Math.max(...list.map(o => parseInt(o.position)))
    result['table_5'] = {"min": min_val, "max": max_val}
    return res.send(result).status(200)
}

module.exports={proteinLabGraph, protein_2_LabGraph, protein_3_LabGraph, protein_4_LabGraph, protein_5_LabGraph, 
    protein_1_query, protein_2_query, protein_3_query, protein_4_query, protein_5_query, position_low_max}
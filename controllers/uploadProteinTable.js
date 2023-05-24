const db = require('../models')
const fs = require("fs");
const { parse } = require("csv-parse");

const proteinTable = db.proteinTable
const protein_2_table = db.protein_2_table
const protein_3_table = db.protein_3_table
const protein_4_table = db.protein_4_table
const protein_5_table = db.protein_5_table
const csv_name_table = db.csvName

const loadCsv = async (req, res)=>{
    const file_path=req.files[0].path
    const file_name = req.files[0].originalname
    fs.createReadStream(file_path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        let data = {
            position: row[0],
            amino_acid: row[1],
            amino_acid_1_ltr: row[2],
            amino_acid_3_ltr: row[3],
            Seq_AOL: row[4],
            Seq_Sub: row[5],
            Seq_1_ltr: row[6],
            Seq_3_ltr: row[7],
            Seq_AG: row[8],
            Seq_SOL: row[9],
            Seq_Sub_Table: row[10],
            Reg_Sub: row[11],
            Reg_1_ltr: row[12],
            Reg_3_ltr: row[13],
            Reg_AG: row[14],
            Reg_SOL: row[15],
            Reg_Sub_Table: row[16]

        }
        proteinTable.create(data).then((item)=>{
            
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({"message": err.errors[0].message})
        })
    })

    // find is there any csv file for spike table
    const object_data = await csv_name_table.findOne({
        where:{
            table_name: 'spike',
        },
    })

    // if any then update file name
    if(object_data){
        object_data.file_name = file_name
        await object_data.save()
    }else{ // else create new file name for spike table
        await csv_name_table.create({table_name:'spike', file_name: file_name})
    }

    return res.status(200).send({"file_name": file_name, "status": "saved"})
}

const DeleteAllSpikeTable = async(req, res)=>{
    proteinTable.destroy({
        where: {},
        truncate: true
      })
    
    const object_data = await csv_name_table.findOne({
        where:{
            table_name: 'spike',
        },
    })
    if(object_data){
        await object_data.destroy()
    }
    return res.status(200).send({"status:": 1, "message": "Delete all"})
}

const protien_2_loadCsv = async (req, res)=>{
    const file_path=req.files[0].path
    const file_name = req.files[0].originalname
    fs.createReadStream(file_path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        let data = {
            position: row[0],
            amino_acid: row[1],
            amino_acid_1_ltr: row[2],
            amino_acid_3_ltr: row[3],
            Seq_AOL: row[4],
            Seq_Sub: row[5],
            Seq_1_ltr: row[6],
            Seq_3_ltr: row[7],
            Seq_AG: row[8],
            Seq_SOL: row[9],
            Seq_Sub_Table: row[10],
            Reg_Sub: row[11],
            Reg_1_ltr: row[12],
            Reg_3_ltr: row[13],
            Reg_AG: row[14],
            Reg_SOL: row[15],
            Reg_Sub_Table: row[16]

        }
        protein_2_table.create(data).then((item)=>{
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({"message": err.errors[0].message})
        })
    })

    // find is there any csv file for spike table
    const object_data = await csv_name_table.findOne({
        where:{
            table_name: 'protein-2',
        },
    })

    // if any then update file name
    if(object_data){
        object_data.file_name = file_name
        await object_data.save()
    }else{ // else create new file name for spike table
        await csv_name_table.create({table_name:'protein-2', file_name: file_name})
    }

    return res.status(200).send({"file_name": file_name, "status": "saved"})
}

const DeleteAllProtienTable_2 = async(req, res)=>{
    protein_2_table.destroy({
        where: {},
        truncate: true
      })
    
    const object_data = await csv_name_table.findOne({
        where:{
            table_name: 'protein-2',
        },
    })
    if(object_data){
        await object_data.destroy()
    }
    return res.status(200).send({"status:": 1, "message": "Delete all"})
}

const protien_3_loadCsv = async (req, res)=>{
    const file_path=req.files[0].path
    const file_name = req.files[0].originalname
    fs.createReadStream(file_path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        let data = {
            position: row[0],
            amino_acid: row[1],
            amino_acid_1_ltr: row[2],
            amino_acid_3_ltr: row[3],
            Seq_AOL: row[4],
            Seq_Sub: row[5],
            Seq_1_ltr: row[6],
            Seq_3_ltr: row[7],
            Seq_AG: row[8],
            Seq_SOL: row[9],
            Seq_Sub_Table: row[10],
            Reg_Sub: row[11],
            Reg_1_ltr: row[12],
            Reg_3_ltr: row[13],
            Reg_AG: row[14],
            Reg_SOL: row[15],
            Reg_Sub_Table: row[16]

        }
        protein_3_table.create(data).then((item)=>{
            
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({"message": err.errors[0].message})
        })
    })

    // find is there any csv file for spike table
    const object_data = await csv_name_table.findOne({
        where:{
            table_name: 'protein-3',
        },
    })

    // if any then update file name
    if(object_data){
        object_data.file_name = file_name
        await object_data.save()
    }else{ // else create new file name for spike table
        await csv_name_table.create({table_name:'protein-3', file_name: file_name})
    }

    return res.status(200).send({"file_name": file_name, "status": "saved"})
}

const DeleteAllProtienTable_3 = async(req, res)=>{
    protein_3_table.destroy({
        where: {},
        truncate: true
      })
    const object_data = await csv_name_table.findOne({
        where:{
            table_name: 'protein-3',
        },
    })
    if(object_data){
        await object_data.destroy()
    }
    return res.status(200).send({"status:": 1, "message": "Delete all"})
}

const protien_4_loadCsv = async (req, res)=>{
    const file_path=req.files[0].path
    const file_name = req.files[0].originalname
    fs.createReadStream(file_path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        let data = {
            position: row[0],
            amino_acid: row[1],
            amino_acid_1_ltr: row[2],
            amino_acid_3_ltr: row[3],
            Seq_AOL: row[4],
            Seq_Sub: row[5],
            Seq_1_ltr: row[6],
            Seq_3_ltr: row[7],
            Seq_AG: row[8],
            Seq_SOL: row[9],
            Seq_Sub_Table: row[10],
            Reg_Sub: row[11],
            Reg_1_ltr: row[12],
            Reg_3_ltr: row[13],
            Reg_AG: row[14],
            Reg_SOL: row[15],
            Reg_Sub_Table: row[16]

        }
        protein_4_table.create(data).then((item)=>{
            
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({"message": err.errors[0].message})
        })
    })

    // find is there any csv file for spike table
    const object_data = await csv_name_table.findOne({
        where:{
            table_name: 'protein-4',
        },
    })

    // if any then update file name
    if(object_data){
        object_data.file_name = file_name
        await object_data.save()
    }else{ // else create new file name for spike table
        await csv_name_table.create({table_name:'protein-4', file_name: file_name})
    }

    return res.status(200).send({"file_name": file_name, "status": "saved"})
}

const DeleteAllProtienTable_4 = async(req, res)=>{
    protein_4_table.destroy({
        where: {},
        truncate: true
      })
    const object_data = await csv_name_table.findOne({
        where:{
            table_name: 'protein-4',
        },
    })
    if(object_data){
        await object_data.destroy()
    }
    return res.status(200).send({"status:": 1, "message": "Delete all"})
}

const protien_5_loadCsv = async (req, res)=>{
    const file_path=req.files[0].path
    const file_name = req.files[0].originalname
    fs.createReadStream(file_path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        let data = {
            position: row[0],
            amino_acid: row[1],
            amino_acid_1_ltr: row[2],
            amino_acid_3_ltr: row[3],
            Seq_AOL: row[4],
            Seq_Sub: row[5],
            Seq_1_ltr: row[6],
            Seq_3_ltr: row[7],
            Seq_AG: row[8],
            Seq_SOL: row[9],
            Seq_Sub_Table: row[10],
            Reg_Sub: row[11],
            Reg_1_ltr: row[12],
            Reg_3_ltr: row[13],
            Reg_AG: row[14],
            Reg_SOL: row[15],
            Reg_Sub_Table: row[16]

        }
        protein_5_table.create(data).then((item)=>{
            
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({"message": err.errors[0].message})
        })
    })

    // find is there any csv file for spike table
    const object_data = await csv_name_table.findOne({
        where:{
            table_name: 'protein-5',
        },
    })

    // if any then update file name
    if(object_data){
        object_data.file_name = file_name
        await object_data.save()
    }else{ // else create new file name for spike table
        await csv_name_table.create({table_name:'protein-5', file_name: file_name})
    }

    return res.status(200).send({"file_name": file_name, "status": "saved"})
}
const DeleteAllProtienTable_5 = async(req, res)=>{
    protein_5_table.destroy({
        where: {},
        truncate: true
      })
    const object_data = await csv_name_table.findOne({
        where:{
            table_name: 'protein-5',
        },
    })
    if(object_data){
        await object_data.destroy()
    }
    return res.status(200).send({"status:": 1, "message": "Delete all"})
}

const CsvNames = async(req, res)=>{
    const allcsv = await csv_name_table.findAll()
    return res.status(200).send({"csv_names": allcsv})
}

module.exports = {loadCsv, protien_2_loadCsv, protien_3_loadCsv, protien_4_loadCsv, protien_5_loadCsv,
    DeleteAllSpikeTable,DeleteAllProtienTable_2,DeleteAllProtienTable_3,DeleteAllProtienTable_4 ,DeleteAllProtienTable_5, CsvNames}
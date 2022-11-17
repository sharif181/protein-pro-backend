const db = require('../models')
const fs = require("fs");
const { parse } = require("csv-parse");

const proteinTable = db.proteinTable
const protein_2_table = db.protein_2_table
const protein_3_table = db.protein_3_table
const protein_4_table = db.protein_4_table
const protein_5_table = db.protein_5_table

const loadCsv = async (req, res)=>{
    const file_path=req.files[0].path
    fs.createReadStream(file_path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        let data = {
            position: row[0],
            amino_acid: row[1],
            amino_acid_1_ltr: row[2],
            amino_acid_3_ltr: row[3],
            sub: row[4],
            sub_1_ltr: row[5],
            sub_3_ltr: row[6],
            ag: row[7],
            region: row[8],
            labs: row[9],
            design_asset: row[10]

        }
        proteinTable.create(data).then((item)=>{
            console.log(item)
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({"message": err.errors[0].message})
        })
    })

    return res.status(200).send("saved")
}

const protien_2_loadCsv = async (req, res)=>{
    const file_path=req.files[0].path
    fs.createReadStream(file_path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        let data = {
            position: row[0],
            amino_acid: row[1],
            amino_acid_1_ltr: row[2],
            amino_acid_3_ltr: row[3],
            sub: row[4],
            sub_1_ltr: row[5],
            sub_3_ltr: row[6],
            ag: row[7],
            region: row[8],
            labs: row[9],
            design_asset: row[10]

        }
        protein_2_table.create(data).then((item)=>{
            console.log(item)
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({"message": err.errors[0].message})
        })
    })

    return res.status(200).send("saved")
}

const protien_3_loadCsv = async (req, res)=>{
    const file_path=req.files[0].path
    fs.createReadStream(file_path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        let data = {
            position: row[0],
            amino_acid: row[1],
            amino_acid_1_ltr: row[2],
            amino_acid_3_ltr: row[3],
            sub: row[4],
            sub_1_ltr: row[5],
            sub_3_ltr: row[6],
            ag: row[7],
            region: row[8],
            labs: row[9],
            design_asset: row[10]

        }
        protein_3_table.create(data).then((item)=>{
            console.log(item)
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({"message": err.errors[0].message})
        })
    })

    return res.status(200).send("saved")
}

const protien_4_loadCsv = async (req, res)=>{
    const file_path=req.files[0].path
    fs.createReadStream(file_path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        let data = {
            position: row[0],
            amino_acid: row[1],
            amino_acid_1_ltr: row[2],
            amino_acid_3_ltr: row[3],
            sub: row[4],
            sub_1_ltr: row[5],
            sub_3_ltr: row[6],
            ag: row[7],
            region: row[8],
            labs: row[9],
            design_asset: row[10]

        }
        protein_4_table.create(data).then((item)=>{
            console.log(item)
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({"message": err.errors[0].message})
        })
    })

    return res.status(200).send("saved")
}

const protien_5_loadCsv = async (req, res)=>{
    const file_path=req.files[0].path
    fs.createReadStream(file_path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        let data = {
            position: row[0],
            amino_acid: row[1],
            amino_acid_1_ltr: row[2],
            amino_acid_3_ltr: row[3],
            sub: row[4],
            sub_1_ltr: row[5],
            sub_3_ltr: row[6],
            ag: row[7],
            region: row[8],
            labs: row[9],
            design_asset: row[10]

        }
        protein_5_table.create(data).then((item)=>{
            console.log(item)
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({"message": err.errors[0].message})
        })
    })

    return res.status(200).send("saved")
}


module.exports = {loadCsv, protien_2_loadCsv, protien_3_loadCsv, protien_4_loadCsv, protien_5_loadCsv}
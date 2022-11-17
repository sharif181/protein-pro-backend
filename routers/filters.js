const router = require("express").Router();
const {proteinLabGraph, protein_2_LabGraph, protein_3_LabGraph, protein_4_LabGraph, protein_5_LabGraph} = require("../controllers/filters")


router.get("/spike-protein-lab-graph", proteinLabGraph)
router.get("/protein-2-lab-graph", protein_2_LabGraph)
router.get("/protein-3-lab-graph", protein_3_LabGraph)
router.get("/protein-4-lab-graph", protein_4_LabGraph)
router.get("/protein-5-lab-graph", protein_5_LabGraph)

module.exports = router
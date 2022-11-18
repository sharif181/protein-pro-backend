const router = require("express").Router();
const {proteinLabGraph, protein_2_LabGraph, protein_3_LabGraph, protein_4_LabGraph, protein_5_LabGraph, protein_1_query,
protein_2_query, protein_3_query, protein_4_query, protein_5_query} = require("../controllers/filters")


router.get("/spike-protein-lab-graph", proteinLabGraph)
router.get("/protein-2-lab-graph", protein_2_LabGraph)
router.get("/protein-3-lab-graph", protein_3_LabGraph)
router.get("/protein-4-lab-graph", protein_4_LabGraph)
router.get("/protein-5-lab-graph", protein_5_LabGraph)
router.get("/protein-graph-1-query", protein_1_query)
router.get("/protein-graph-2-query", protein_2_query)
router.get("/protein-graph-3-query", protein_3_query)
router.get("/protein-graph-4-query", protein_4_query)
router.get("/protein-graph-5-query", protein_5_query)

module.exports = router
const router = require("express").Router();
const {proteinLabGraph, protein_2_LabGraph, protein_3_LabGraph, protein_4_LabGraph, protein_5_LabGraph, protein_1_query,
protein_2_query, protein_3_query, protein_4_query, protein_5_query, position_low_max} = require("../controllers/filters")


router.post("/spike-protein-lab-graph", proteinLabGraph)
router.post("/protein-2-lab-graph", protein_2_LabGraph)
router.post("/protein-3-lab-graph", protein_3_LabGraph)
router.post("/protein-4-lab-graph", protein_4_LabGraph)
router.post("/protein-5-lab-graph", protein_5_LabGraph)
router.post("/protein-graph-1-query", protein_1_query)
router.post("/protein-graph-2-query", protein_2_query)
router.post("/protein-graph-3-query", protein_3_query)
router.post("/protein-graph-4-query", protein_4_query)
router.post("/protein-graph-5-query", protein_5_query)
router.get("/protien-position-range", position_low_max)

module.exports = router
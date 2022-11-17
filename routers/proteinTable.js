const router = require("express").Router();
const multer = require("multer");
const {loadCsv, protien_2_loadCsv, protien_3_loadCsv, protien_4_loadCsv, protien_5_loadCsv} = require("../controllers/uploadProteinTable")

const upload = multer({ dest: "upload_csv/" })


router.post("/spike-create", upload.array("file"), loadCsv)
router.post("/protien-2-create", upload.array("file"),protien_2_loadCsv)
router.post("/protien-3-create", upload.array("file"),protien_3_loadCsv)
router.post("/protien-4-create", upload.array("file"),protien_4_loadCsv)
router.post("/protien-5-create", upload.array("file"),protien_5_loadCsv)

module.exports = router
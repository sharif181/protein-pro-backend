const router = require("express").Router();
const multer = require("multer");
const {loadCsv} = require("../controllers/uploadProteinTable")

const upload = multer({ dest: "upload_csv/" })


router.post("/create", upload.array("file"), loadCsv)

module.exports = router
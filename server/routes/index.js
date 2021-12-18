const  express  = require("express") ;

const Admin  = require("../controller");

const router = express.Router();

// Users
router.get("/students", Admin.getStudents);

module.exports = router;

let express    = require("express"),
    router     = express.Router(),
    passport   = require("passport");

//root route
router.get("/", function(req, res){
    res.render("landing");
 }); 

 module.exports = router;
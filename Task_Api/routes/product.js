const router =require("express").Router()
const productController = require("../conrtrollers");

router.post("/create",productController.product_create)
router.get("/get",productController.product_all)
router.get("/:productId" ,productController.product_details)
router.put("/:productId" ,productController.product_update)
router.delete("/:productId" ,productController.product_delete)
module.exports = router



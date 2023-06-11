const router = require("express").Router();
const productController = require("../controllers/productController");

//to get all products function
router.get('/',productController.index.js)

//to create function
router.post('/create',productController.create)

//to delete function
router.delete('/:id',productController.delete)

//to update function
router.post('/:id/update_quantity',productController.update)

module.exports = router;

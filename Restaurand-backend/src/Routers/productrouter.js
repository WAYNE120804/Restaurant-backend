const express=require('express');
const productcontroller=require('../Controllers/productcontroller');
const router=express.Router();

router.post('/createproduct', productcontroller.createPrduct);
router.get('/listproduct', productcontroller.listProducts);

module.exports=router;
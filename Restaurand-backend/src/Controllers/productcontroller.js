require('express');
const product=require('../Models/product');
const restaurant = require ('../Models/restaurant');

async function createPrduct(req, res){
    try{
        await product.create({
            productName : req.body.productName,
            productDescription : req.body.productDescription,
            producPrice : req.body.producPrice,
            restaurantId : req.body.restaurantId
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }catch(e){
        console.log(e);
    }
}

async function listProducts(req, res){
    try{
        await product.findAll({
            attributes:[
                'productId',
                'productName',
                'productDescription',
                'producPrice'
            ],
            order:  ['prodcutName'],
            include:{
                model:'restaurant',
                where:{restaurantId: req.params.restaurantId}
            }
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }catch(e){
        console.log(e);
    }
}

module.exports={
    createPrduct,
    listProducts
}
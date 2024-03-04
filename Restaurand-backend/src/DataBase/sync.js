const connection = require('./connection');

//Models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');

function sync(){

    restaurant.hasMany (product, {
    foreignkey: 'restaurantId',
    onDelete: 'restrict',
    onUpdate: 'cascade'
    });

    product.belongsTo (restaurant, {
    foreignkey: 'restaurantId'
    });
}

sync();
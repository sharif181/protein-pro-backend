const db = require('../models')

const Order = db.order

const addOrder = async (req, res) =>{
    let data = {
        product: req.body.product,
        variant: req.body.variant,
        quantity: parseInt(req.body.quantity),
        total_amount: parseFloat(req.body.total_amount),
        userId: parseInt(req.body.userId)
    }

    await Order.create(data).then((order)=>{
        return res.status(200).send(order)
    }).catch((err)=>{
        console.log(err)
        res.status(400).send({"message": err.errors})
    })
}

module.exports = {addOrder}
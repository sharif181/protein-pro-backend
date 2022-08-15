const db = require('../models')

const Product = db.products
const Variant = db.variants
const url = require('url');


const addProduct = async (req, res)=>{
    await Product.create(req.body, {include:[Variant]}).then((product)=>{
        return res.status(200).send(product)
    }).catch((err)=>{
        console.log(err);
        res.status(400).send({"message": err.errors[0].message})
    })
}

const allProduct = async (req, res)=>{
    const products = await Product.findAll({include: Variant})
    return res.status(200).send(products)
}

const productById = async (req, res) =>{
    const product = await Product.findByPk(req.params.id, {include: Variant})
    if(product === null){
        return res.status(400).send({"message": "product not found"})
    }
    return res.status(200).send(product)
}

const productByType = async (req, res) =>{
    const queryObject = url.parse(req.url, true).query;
    const products = await Product.findAll({
        where: {
            product_type: queryObject.product_type,
        }, include: Variant
    })
    if(products === null){
        return res.status(400).send({"message": "product not found"})
    }
    return res.status(200).send(products)
}

const deleteProduct = async (req, res) =>{
    const product = await Product.findByPk(req.body.id);
    if (product === null) {
        return res.status(200).send({"message": 'Not found!'})
    } else {
        await product.destroy().then(()=>{
            return res.status(200).send({"message": "product deleted"})
        })
    }
}

const updateProduct = async (req, res)=>{
    const product = await Product.findByPk(req.body.id, {include: Variant});
    if (product === null) {
        return res.status(400).send({"message": 'Not found!'})
    } else {
        product.set(req.body)
        // req.body.variants.map(async item=>{
        //     const variant = await Variant.findByPk(item.id)
        //     variant.set(item)
        //     await variant.save()
        // })
        await product.save()
        return res.status(200).send({"message": "updated successfully"})
    }
}

module.exports = { addProduct, allProduct, productById, deleteProduct, updateProduct, productByType}

const db = require('../models')
const url = require('url');
const stripe = require('stripe')(`${process.env.STRIPE_SEC}`);


const Product = db.products
const Variant = db.variants


const addProduct = async (req, res)=>{
    const product = await stripe.products.create({
        name: req.body.title,
      });
    
    if (product){
        req.body.stripe_pro_id=product.id
        variant_len=req.body.variants.length
        for(let i=0;i<variant_len;i++){
            const price = await stripe.prices.create({
                unit_amount: req.body.variants[i].price*100,
                currency: process.env.CURRENCY,
                product: product.id,
              });
            req.body.variants[i].stripe_price_id=price.id
        }
        await Product.create(req.body, {include:[Variant]}).then((product)=>{
            return res.status(200).send(product)
        }).catch((err)=>{
            console.log(err);
            res.status(400).send({"message": err.errors[0].message})
        })
    }else{ 
        return res.status(400).send("product not created") 
    }
    
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
        await product.save()
        req.body.variants.map(async item =>{
            if(item.id !== null){
                const variant = await Variant.findByPk(item.id)
                if(variant === null){
                    const price = await stripe.prices.create({
                        unit_amount: item.price*100,
                        currency: process.env.CURRENCY,
                        product: product.stripe_pro_id,
                      });
                    const data = {
                        title: item.title,
                        price: item.price,
                        stripe_price_id: price.id,
                        productId: product.id
                    }
                    await Variant.create(data).then((variant)=>{
                        console.log("new variant created")
                        product.reload()
                    }).catch((err)=>{
                        console.log(err);
                        res.status(400).send({"message": err.errors[0].message})
                    })

                }else{
                    variant.set(item)
                    variant.save()
                }
            }else{
                const price = await stripe.prices.create({
                    unit_amount: item.price*100,
                    currency: process.env.CURRENCY,
                    product: product.stripe_pro_id,
                  });
                const data = {
                    title: item.title,
                    price: item.price,
                    stripe_price_id: price.id,
                    productId: product.id
                }
                await Variant.create(data).then((variant)=>{
                    console.log("new variant created")
                    product.reload()
                }).catch((err)=>{
                    console.log(err);
                    res.status(400).send({"message": err.errors[0].message})
                })
            }
        })
        // const updated_product = await Product.findByPk(req.body.id, {include: Variant});
        // product.reload();
        return res.status(200).send({"message": "success", "code": 1})
    }
    
}

module.exports = { addProduct, allProduct, productById, deleteProduct, updateProduct, productByType}

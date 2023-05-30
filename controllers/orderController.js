const db = require('../models')
const stripe = require('stripe')(`${process.env.STRIPE_SEC}`);

const Order = db.order
const {email_sender} = require('./emailSender')


const CreateSession = async (req, res) =>{
    const data = JSON.parse(req.body.data)
    let items=[]
    data.map(item=>{
        items.push({
            price:item.variant.stripe_price_id,
            quantity: 1
        })
    })
    const session = await stripe.checkout.sessions.create({
        line_items: items,
        mode: 'payment',
        success_url: `${process.env.FRONTEND_SERVER}?success=true`,
        cancel_url: `${process.env.FRONTEND_SERVER}?canceled=true`,
      });
    res.redirect(303, session.url);
}

const addOrder = async (req, res) =>{
      let user_email = ""
      await req.body.map(item=>{
        user_email = item.user_email
        let data = {
            product: item.product_id,
            variant: item.variant_id,
            quantity: parseInt(item.quantity),
            userId: parseInt(item.userId)
        }
        Order.create(data).then((order)=>{
            console.log("saved")
        }).catch((err)=>{
            console.log(err)
            return res.status(400).send({"message": err.errors})
        })

      })
      await email_sender(user_email)
      return res.status(200).send("succesful")
}

module.exports = {addOrder, CreateSession}
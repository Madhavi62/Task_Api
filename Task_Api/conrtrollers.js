const  Product = require("./models/Product")
const product_all= async(req,res)=>{
    try{
        const product = await Product.find()
        res.json(product)
    }
    catch(error){
        res.json({message:error})
    }
}
const product_details = async(req,res)=>{
    try{
    const product = await Product.findById(req.params.productId)
        res.json(product)
    }
    catch(error){
    res.json({message:error})
}
}
const product_create =async(req,res)=>{
    const product = new Product({
        id:req.body.id,
        title:req.body.title,
        is_Completed : req.body.is_Completed
    })
    try{
        const savedProduct = await product.save()
        res.send(savedProduct)

    } catch(error){
        res.status(400).send(error)
    }
}
product_update = async(req,res)=>{
    try{
        const product={
            id:req.body.id,
            title:req.body.title,
            is_Completed : req.body.is_Completed

        }
        const updatedProduct= await Product.findByIdAndUpdate(
            {
                _id:req.params.productId
            },product
        )
        res.json(updatedProduct)
    } catch(erroe){
        res.json({message: error})
    }
}
const product_delete = async(req,res)=>{
    try{
        const removeProduct = await
        Product.findByIdAndDelete(req.params.productId)
        res.json(removeProduct)
    }catch(error){
        res.json({message: error})
    }
}

module.exports ={
    product_all,
    product_create,
    product_details,
    product_update,
    product_delete
}

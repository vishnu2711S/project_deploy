const Product = require('../model/Product');


exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.addNewProduct = async(req, res) =>{
    try{
        const product = req.body;
        const check = await Product.findOne({proId: req.body.proId})
        if(!check){ 
            const addedProduct = await Product.create(req.body)
            res.json(product)
        }
        else{
            res.json({msg: 'Product already exists'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }

}

exports.updateProduct = async (req, res) =>{
    try{
        const product = req.body
        const fetchedProduct = await Product.findOne({proId: product.proId})
        if(fetchedProduct){
            await Product.updateOne(product)
            res.json(fetchedProduct)
        }
        else{
            res.json({msg: 'Product doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}






exports.deleteProduct = async (req, res)=>{
    try{
        const product = await Product.findOne({proId: req.params.id})
        if(product){
            await Product.deleteOne({proId:product.proId})
            res.json(product)
        }
        else{
            res.json({msg: 'product doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

import Product from "../models/Product.js"

export const getData = async(req,res)=>{
    try{
    const data = await Product.find({})
     //console.log(data)
        res.status(200).json(data)
    }catch(error){
        console.log(error)
    }
}

export const getFilterData = async(req,res)=>{
    const category = req.body.category;
    console.log(category)
    try {
        const data = await Product.find({category})
        res.status(200).json(data)  ;  
    } catch (error) {
        console.log(error)
    }
}
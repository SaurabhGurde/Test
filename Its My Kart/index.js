import express from "express";

const router = express.Router();
    //-------sample data ---------------
    //   let data = {
    //     Name : XYZ,
    //     Category : T-shirt ,
    //     Size : L || M, 
    //     Color : Red || Green,
    //     Price :[ 
    //     {Size: L,  Color : Red  , price :  100},
    //     {Size: M,  Color : Red  , price :  150},
    //     {Size: L,  Color : Green, price :  200},
    //     {Size: M,  Color : Green, price :  250},
    //     ]
    // }

router.post("/getfilterprice/:name/:category/:size/:color", async (req, res) => {

    let { name, category, size, color } = req.params;
    let product = await Data.find({size, category}); // Data will be mongoose model where all the products are stored

    let filterProductPrice =  product.Price.filter((e)=> e.Size === size && e.Color === color )

    res.status(200).json({price: filterProductPrice[0].price})

   
});

export default router;

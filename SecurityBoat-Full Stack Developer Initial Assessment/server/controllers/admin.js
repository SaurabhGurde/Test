import Data from "../models/SecurityBoat_CRUD.js";


export const getData = async (req,res)=>{
  try {
      const data = await Data.find({});
      res.status(200).json(data)
  } catch (error) {
    res.status(500).send("Server Error");
  }
}


export const addData= async (req, res) => {
  try {
    // console.log("endpoint")
    const newCrudData = {
      note: req.body.note,
    };

    const updatedDocument = await Data.findOneAndUpdate(
      { email: req.body.email},
      { $push: { crud_data: newCrudData } },
      { new: true }
    ); 
    res.status(200).json({success:true})
  } catch (error) {
    res.status(500).send("Server Error");
  }
};


export const updateUserData = async(req,res) => {

  try {
    const filter = {
      'crud_data._id': req.body.id,
    };

    const update = {
      $set: {
        'crud_data.$.note': req.body.note,
      },
    };
       
    const updatedData = await Data.findOneAndUpdate(filter, update, { new: true });

    if (!updatedData) {
      throw new Error('Document not found');
    }

    res.status(200).json({success:true})
  } catch (error) {
    res.status(500).send("Server Error");
  }

}

export const deleteUserData = async (req,res)=>{
   
  //console.log("endpoint")
  try {
    const filter = {
      'crud_data._id': req.body.id,
    };

    const update = {
      $pull: {
        crud_data: { _id: req.body.id },
      },
    };

    const updatedData = await Data.findOneAndUpdate(filter, update, { new: true });

    if (!updatedData) {
      throw new Error('Document not found');
    }

    res.status(200).json({success:true})
  } catch (error) {
    res.status(500).send("Server Error");
  }
}
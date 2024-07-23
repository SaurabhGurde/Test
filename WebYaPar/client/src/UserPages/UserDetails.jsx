import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { toast } from 'react-toastify';
import axios from 'axios';


const UserDetails = () => {
  const [image, setImage] = useState(null);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();


  const onChange = (e) => {
    e.preventDefault();
    // console.log(e)
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  // -----------------------------------------------------------------------------------------------
  // const getCropData = () => {
  //    if (typeof cropper !== "undefined") {
  //     setCropData(cropper.getCroppedCanvas().toDataURL());
  //    }
  //   console.log("This is the Croped Image", cropData);
  // };
  //-----------------------------------------------------------------------------------------------
  const navigate = useNavigate()
  const params = useParams()
  const { UserID } = params
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
    console.log("This is the Croped Image", cropData);

    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}api/updateuser`, {
      
        "UserID": UserID,
        "name": data.name,
        "imgURL": cropData
      
    })



    if (response.data.success) {
      // navigate(`/userdetails/${UserID}`)
      toast("success")
    }
    else {
      toast.warning("server Error", { autoClose: 2000 })
      navigate(0)
      reset()
    }
  }

  // console.log(cropper)
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h2>User Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "30%" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Enter Name </label>
          <input {...register("name", { required: true, min: 1000, max: 9999 })} type="text" className="form-control" id="exampleInputEmail1" />
          {errors.name && <div className='error'>Enter user id in correct format between 1000-9999</div>}
        </div>
        <input
          type="file"
          onChange={onChange}
          className="bg-red-200 rounded p-[8px] w-[50%]"
        />
        {/* {image && <button style={{backgroundColor:"#0d6efd", color:"white", border:"1px solid black"}} onClick={getCropData} className="bg-red-200 rounded p-[8px]">
          Crop Image
        </button>} */}
        <Cropper
          className="h-[500px] w-[50%] mt-3"
          initialAspectRatio={1}
          src={image}
          background={false}
          responsive={true}
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          zoomable={false}
        />
        <button type="submit" className="btn btn-primary mt-2">Login</button>
      </form>
    </div>
  )
}

export default UserDetails
import React from 'react';
import "./UserLogin.css";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const UserLogin = () => {
  const navigate = useNavigate()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/loginuser`, {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();
    if (json.success) {
      navigate(`/userdetails/${data.UserID}`)
    }
    else {
      toast.warning("Enter correct login details", { autoClose: 2000 })
      reset()
    }
  }

  return (
    <div className='box'>
      <div className="left-box" >

      </div>
      <div className="right-box">
        <h2>User Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">User ID </label>
            <input {...register("UserID", { required: true, min: 1000, max: 9999 })} type="number" className="form-control" id="exampleInputEmail1" />
            {errors['UserID'] && <div className='error'>Enter user id in correct format between 1000-9999</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input {...register("password", { required: true })} type="password" className="form-control" id="exampleInputPassword1" />
            {errors.password && <div className='error'>This field is neccessary</div>}
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}

export default UserLogin
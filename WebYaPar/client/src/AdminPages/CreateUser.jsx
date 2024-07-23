import React from 'react';
import { useForm } from "react-hook-form";
import './CreateUser.css';
import { useNavigate } from "react-router-dom"
import {  toast } from 'react-toastify';


const CreateUser = () => {
  const navigate = useNavigate()

  // Create separate instances of useForm for each form
  const {
    register: registerForm1,
    handleSubmit: handleSubmitForm1,
    formState: { errors: errorsForm1 },
    reset: reset1
  } = useForm()

  const {
    register: registerForm2,
    handleSubmit: handleSubmitForm2,
    formState: { errors: errorsForm2 },
    reset: reset2
  } = useForm()

  const onSubmitForm1 = async (data) => {
       console.log(data)
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/createuser`, {
      method: 'POST',
      headers: {
          
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({...data,name:"",imgDATA:"", Approved:false})
  });
  const json = await response.json();
  if(json.success){
      toast.success("User created successfully", {autoClose: 1000})
      reset1()
  }
  else{
      toast.warning("server error", {autoClose:2000})
      reset1()
  }
  }

  const onSubmitForm2 = (data) => {
    console.log(data)
    alert("Data Entered Successfully for Form 2")
    reset1()
  }

  return (
    <div className='create-user-box'>
      <div className='create-user-left-box'>
        <h2>Create User</h2>
        <form onSubmit={handleSubmitForm1(onSubmitForm1)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">User ID</label>
            <input {...registerForm1("UserID", { required: true, min: 1000, max: 9999 })} type="number" className="form-control" />
            {errorsForm1['UserID'] && <div className='error'>Enter user id in the correct format between 1000-9999</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input {...registerForm1("password", { required: true })} type="password" className="form-control" id="exampleInputPassword1" />
            {errorsForm1.password && <div className='error'>This field is necessary</div>}
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>

      <div className='create-user-right-box'>
        <h2>View User</h2>
        <form onSubmit={handleSubmitForm2(onSubmitForm2)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">User ID 1</label>
            <input {...registerForm2("user-id1", { required: true, min: 1000, max: 9999 })} type="number" className="form-control" />
            {errorsForm2['user-id1'] && <div className='error'>Enter user id in the correct format between 1000-9999</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">User Id 2</label>
            <input {...registerForm2("user-id2", { required: true, min: 1000, max: 9999 })} type="number" className="form-control"  />
            {errorsForm2['user-id2'] && <div className='error'>Enter user id in the correct format between 1000-9999</div>}
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser;

import React from 'react';
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom"

const AdminLogin = () => {
  const navigate = useNavigate()
  return (
    <div className='box'>
      <div className="left-box" >

      </div>
      <div className="right-box">
        <h2>Admin Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">User ID</label>
            <input value="98765" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input value="uii67688" type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <button onClick={()=>navigate("/createuser")} type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
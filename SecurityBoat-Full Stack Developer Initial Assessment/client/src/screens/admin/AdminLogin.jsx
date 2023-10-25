import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate();

    const submitForm = ()=>{
          navigate('/adminpage');
    }
    return (
        <div style={{ backgroundColor:"#ddddf0", height:"100vh", width:"100vw"}}>
            <form className='container' style={{paddingTop:"25vh"}}>
            <h1 style={{textAlign:"center"}}>Admin Login</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="email" value="admin@gmail.com" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name="password" value="admin1234" type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
               
                <button onClick={submitForm} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminLogin
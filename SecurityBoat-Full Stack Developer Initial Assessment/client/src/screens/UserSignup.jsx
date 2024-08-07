import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({})
    const onChange = (e) => {
       
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const Submit = async () => {
        
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user/createuser`, {           
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password })

        });
        const json = await response.json()
        if (json.success) {
            //save the auth toke to local storage and redirect
            localStorage.setItem('userEmail', credentials.email)
            localStorage.setItem('token', json.authToken)
            navigate("/userpage");
      
          }
          else {
            alert("Enter Valid Credentials")
          }
        
    }

    return (
        <div style={{ backgroundColor: "#ddddf0", height: "100vh", width: "100vw" }}>

            <form className='container' style={{ paddingTop: "25vh" }}>
                <h1 style={{ textAlign: "center" }}>User Signup</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input onChange={onChange} name='name' type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={onChange} name='email' type="email" className="form-control" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={onChange} name='password' type="password" className="form-control" />
                </div>

                <button onClick={Submit} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}

export default UserSignup
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
     const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })

    const signupUser = async (e) => {
        e.preventDefault();
        try{
        const response = await fetch("http://localhost:5000/api/signup", {
 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password})

        });
        if(response.status===200){
        const json = await response.json()
        console.log(json);
         navigate("/")
        }else{
            alert("user alreday exists plz enter unique value")
        }
        
    }catch(error){console.log(error)}
}

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <form className='container mt-4'>
            <div className="form-group">
                <label htmlFor="exampleInputName">name</label>
                <input type="text" className="form-control" name='name' onChange={onChange} placeholder="Enter full name" />
            </div>
            <div className="form-group ">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" name='email' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" name='password' onChange={onChange} placeholder="Password" />
            </div>
            <button onClick={signupUser} type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Signup;
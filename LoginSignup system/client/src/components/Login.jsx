import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const  navigate = useNavigate()
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });
    
                
                const data = await response.json();
                // console.log(data)
                if(data.success){
                navigate("/");
                }
                else{
                    alert("enter correct credentials")
                }
            
                
            
        } catch (error) {
            console.error(error);
        }
    };
    

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <form className='container mt-4'>
            <div className="form-group ">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={onChange} type="email" className="form-control" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={onChange} type="password" className="form-control" name='password' placeholder="Password" />
            </div>
            <button onClick={loginUser} type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login;
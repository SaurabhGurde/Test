import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();
  return (
    
          <div style={{ height:"100vh"}} className='d-flex flex-column justify-content-center align-items-center'>
                <button onClick={()=>navigate("/adminlogin")} className='btn btn-primary mt-2 w-25 h-5'>Login As Admin</button>
                <button onClick={()=>navigate("/userlogin")} className='btn btn-primary mt-2 w-25 h-5'>Login As  User</button>
          </div>
    
  )
}

export default MainPage;
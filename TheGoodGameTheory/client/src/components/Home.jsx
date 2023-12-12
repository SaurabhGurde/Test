import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor:"#F5F5DC" }}>
      <h1 className='border border-dark p-3 rounded bg-success' style={{cursor:"pointer"}} onClick={()=>{navigate("/mcqpage/1")}}>Start Your Test &rarr;</h1>
      <p>There will be 10 questions. Each question is of 10 marks. Test will be total of 100 marks</p>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { useNavigate } from'react-router-dom';
import "./Form.css";

const Form = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async () => {
    setLoading(true); 
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/adddata`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const json = await response.json();
      if (response.status === 200) {
        alert("Data Added");
        navigate(0);
      } else {
        alert("Add Data Failed");
        navigate(0);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading back to false after the request is completed
    }
  }

  return (
    <div style={{ width: '500px', display: "flex", flexDirection: "column", alignItems: 'center' }}>
      <h1>
        Add <span style={{ color: 'rgb(1, 112, 220)' }}>Data</span>
      </h1>
      <form>
        <div className='input-div'>
          <input onChange={handleChange} type='text' placeholder='Enter Title' name='title' />
        </div>
        <div className='input-div'>
          <input onChange={handleChange} type='text' placeholder='Annualized return' name='annualized-return' />
        </div>
        <div className='input-div'>
          <input onChange={handleChange} type='text' placeholder='Annual appreciation' name='annual-appreciation' />
        </div>
        <div className='input-div'>
          <input onChange={handleChange} type='number' placeholder='Enter Cost' name='Cost' />
        </div>
        {/* Add more input fields as needed */}
        
        <button onClick={handleSubmit} disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
      </form>
      
    </div>
  );
}

export default Form;

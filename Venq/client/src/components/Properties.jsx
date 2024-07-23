import React, { useEffect, useState } from 'react';

const Properties = () => {
     const [Data, setData] = useState([])

     const getData = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}/getdata`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const json = await response.json();
          if (response.status === 200) {
            setData(json.data)
            
          } else {
            alert("server Error");
            
          }
        } catch (error) {
          console.log(error);
        } 
      }
      useEffect(()=>{
          getData();
      },[])
  return (
    <>
    { Data.length !==0 ? Data.map((e)=> 
   
    <div style={{ marginLeft: "50px", marginTop:"30px" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="https://venq.onrender.com/images/signup_page.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{e.title}</h5>
          <p className="card-text"> <span style={{ color: 'rgb(1, 112, 220)' }}>Annualized-return: </span>{e["annualized-return"]}</p>
          <p className="card-text"> <span style={{ color: 'rgb(1, 112, 220)' }}>Annual-appreciation: </span>{e["annual-appreciation"]}</p>
          <p className="card-text"> <span style={{ color: 'rgb(1, 112, 220)' }}>Cost:  </span>₹{e.Cost}</p>
        </div>
      </div>
    </div>
    )
    
    :<div>Loading...</div>
    }
    </>
  )
}

export default Properties;

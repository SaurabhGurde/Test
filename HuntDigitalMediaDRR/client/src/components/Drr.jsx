import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from './Loading';

const Drr = () => {
  const [data, setData] = useState({
    startDate: new Date(),
    endDate: new Date(),
    datesExcludedStart: new Date(),
    datesExcludedEnd: new Date(),
    leadCount: "",
    expectedDRR: ""
  });
const [drrData, setdrrData] = useState()


//console.log(data)

  const formatDate = (date) => {
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return "";
  };
  const getData = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/getdata`, {
   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
     

    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json()
    setdrrData(json)
    console.log(drrData)
  }
  const onsubmit = async () => {
     setData({...data,   startDate: new Date(),
      endDate: new Date(),
      datesExcludedStart: new Date(),
      datesExcludedEnd: new Date()} )
     
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/adddata`, {
   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ startDate: formatDate(data.startDate),
                             endDate: formatDate(data.endDate),
                             datesExcludedStart: formatDate(data.datesExcludedStart),
                             datesExcludedEnd: formatDate(data.datesExcludedEnd),
                             leadCount: data.leadCount,
                             expectedDRR: data.expectedDRR,
                             lastUpdated:formatDate( new Date() )
       })

    });
    const json = await response.json()
    getData()
    alert("Data  Addeed")
    //console.log("json", json)
    
  }
useEffect(()=>{
   getData();
}, [])

  return (
    <div>
    <table className="table" style={{ marginTop: "10%" }}>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Date Excluded</th>
          <th scope="col">Number Of Days</th>
          <th scope="col">Lead Count</th>
          <th scope="col">Expected DRR</th>
          <th scope="col">Last Updated</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">-</th>
          <td>
            <DatePicker 
              selected={data.startDate}
              onChange={(date) => { setData({ ...data, startDate: date }); }}
              selectsStart

            />
          </td>
          <td>
            <DatePicker
              selected={data.endDate}
              onChange={(date) => { setData({ ...data, endDate: date }); }}
              selectsStart

            />
          </td>
          <td style={{ fontWeight: "bold" }}>
            Start Date
            <DatePicker
              selected={data.datesExcludedStart}
              onChange={(date) => { setData({ ...data, datesExcludedStart: date }); }}
              selectsStart

            />
            <br></br>
            End Date
            <DatePicker
              selected={data.datesExcludedEnd}
              onChange={(date) => { setData({ ...data, datesExcludedend: date }); }}
              selectsStart

            />
          </td>
          <td>1</td>
          <td>
            <input type="number" 
                   onChange={(date) => { setData({ ...data, leadCount: date.target.value.toString() }); }}
            />
          </td>
          <td>
            <input type="number" 
                   onChange={(date) => { setData({ ...data, expectedDRR: date.target.value.toString() }); }}
            />
          </td>
          <td>
          <button type="submit" onClick={onsubmit} class="btn btn-success">Submit</button>
          </td>

        </tr>
        {  
        drrData ?
        
          drrData.slice(0).reverse().map((e,i)=>{
            console.log(e)
         return(
        <tr key={`data${i}`}>
           
          <th scope="row">{i+1}</th> 
          <td>{`${e.startDate}`}</td>
          <td>{e.endDate}</td>
          <td>{`${e.datesExcludedStart} - ${e.datesExcludedEnd}`}</td>
          
          <td>20</td>
          <td>{e.leadCount}</td>
          <td>{e.expectedDRR}</td>
          <td>{e.lastUpdated}</td>
                
        </tr>)
         })
         :  ""}

      </tbody>
    </table>
    {!drrData && <Loading/>}
    </div>
  );
};

export default Drr;

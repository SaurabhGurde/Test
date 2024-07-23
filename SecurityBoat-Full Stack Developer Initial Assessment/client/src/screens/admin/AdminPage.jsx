import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, resetData } from '../../redux/slice';
import AdminTable from './AdminTable';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
   
     const data = useSelector((state) => state.data.data);
    const [addData, setAddData] = useState("")
    const [editData, setEditData] = useState("")

   
//-----------------------handle user table data  data--------------------------------
    const getData = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/admin/getdata`, {
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json'
            },
            
        });

        const json = await response.json();
        dispatch(getUserData(json))
        
        
        
    };
    const handleAddData = async (email)=>{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/admin/adduserdata`, {
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:email, note:addData})
        });
        const json = await response.json();
        if(json.success){
            getData();
        }
        else{
            alert("Add Data Failed")
        }
    }
    const handleEditData = async (id)=>{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/admin/updateuserdata`, {
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  note:editData,id:id})
        });
        const json = await response.json();
        if(json.success){
            getData();
        }
        else{
            alert("Edit Data Failed")
        }
    }
    const deleteData = async (id)=>{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/admin/deleteuserdata`, {
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:id})
        });
        const json = await response.json();
        if(json.success){
            getData();
        }
        else{
            alert("DeleteData Failed")
        }
    }
    
    const handleLogout = ()=>{
       dispatch(resetData());
       navigate("/")
    }

    useEffect(() => {
        getData();
        
    }, []);

    return (
        <div>

           <h1 style={{ textAlign: "center", marginTop: "10px" }}>Admin <button onClick={handleLogout} style={{position:"relative", left:"200px"}} className='btn btn-danger'>Logout</button></h1>   
           <hr style={{background: 'black',color: 'black',borderColor: 'black',height: '3px',marginBottom:"50px"}}/>
           {data.length === 0 && <Loading />}

           {data && data.map((data)=>
            <AdminTable
              key={data._id}
              email={data.email}
              crud_data={data.crud_data}
              handleAddData={handleAddData}
              handleEditData ={handleEditData}
              deleteData={deleteData}
              setAddData={setAddData}
              setEditData={setEditData}
            />
            )}
             
        </div>
    );
};

export default AdminPage;

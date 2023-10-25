import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../redux/slice';
import AdminTable from './AdminTable';

const AdminPage = () => {

    const dispatch = useDispatch();
    
   
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

    useEffect(() => {
        getData();
        
    }, []);

    return (
        <div>
            {data&& data.map((data)=>
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

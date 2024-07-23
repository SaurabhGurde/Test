import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserData,resetData } from '../../redux/slice';
import Loading from '../components/Loading';

const UserPage = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const userEmail=localStorage.getItem('userEmail');
    const token = localStorage.getItem('token');
     const data = useSelector((state) => state.data.data);
    const [isAddConfirmDataOpen, setAddConfirmDataOpen] = useState(true);
    const [isEditedRowOpen, setisEditedRowOpen] = useState(-1);
    const [addData, setAddData] = useState("")
    const [editData, setEditData] = useState("")

//-----------------------handle input data--------------------------------
    const handleSetAddData =  (e)=>{
        setAddData(e.target.value)
       
    }
    const handleSetEditData = (e)=>{
        const newValue = e.target.value
        setEditData( newValue); 
        
    }

//-----------------------handle user table data  data--------------------------------
    const getData = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/data/getdata`, {
            method: 'POST',
            headers: {
                'auth-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: userEmail })
        });

        const json = await response.json();
        const data1 = json[0].crud_data;
        dispatch(getUserData(data1))
        
    };
    const handleAddData = async ()=>{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/data/adduserdata`, {
            method: 'POST',
            headers: {
                'auth-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:userEmail, note:addData})
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
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/data/updateuserdata`, {
            method: 'POST',
            headers: {
                'auth-token': token,
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
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/data/deleteuserdata`, {
            method: 'POST',
            headers: {
                'auth-token': token,
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
//-----------------------handle logout-------------------------------    
const handleLogout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userEmail')
    dispatch(resetData())
    navigate("/")
}
    useEffect(() => {
        getData();
        
    }, []);

    return (
        <div>
           
            <h2 style={{ textAlign: "center", marginTop: "10px" }}>{userEmail} <button onClick={handleLogout} style={{position:"relative", left:"200px"}} className='btn btn-danger'>Logout</button></h2>
           {data.length === 0 && <Loading />}
            <table style={{ width: "90vw", marginLeft: "5vw", marginTop: "" }} className="table m-5">
                <thead className="thead-dark">
                    <tr>
                        <th style={{ width: "20%", textAlign: 'center' }} scope="col">#</th>
                        <th style={{ width: "20%", textAlign: 'center' }} scope="col">Notes</th>
                        <th style={{ width: "20%", textAlign: 'center' }} scope="col">Button</th>
                    </tr>
                </thead>
                <tbody>
                    {data && 
                        data.map((e, i) => (
                            <tr key={e._id}>
                                <th style={{ width: "20%", textAlign:'center' }} scope="row">{i + 1}</th>
                                <td style={{ width: "60%" }}>
                                    {isEditedRowOpen === i ? (
                                        <input onChange={handleSetEditData}  style={{ width: "100%", borderRadius: "20px", paddingLeft: "15px", paddingRight: "15px" }} type='text' />
                                    ) : (
                                        e.note
                                    )}
                                </td>
                                <td style={{ width: "20%", textAlign: "center" }}>
                                    {isEditedRowOpen === i ? (
                                        <button className='btn btn-primary mx-2 my-2' onClick={() => { handleEditData(e._id) ;setisEditedRowOpen(-1)}}>Submit</button>
                                    ) : (
                                        <button disabled={!isAddConfirmDataOpen} onClick={() => setisEditedRowOpen(i)} className='btn btn-success mx-2 my-2'>Edit</button>
                                    )}
                                    {isEditedRowOpen === i ? (
                                        <button className='btn btn-danger' onClick={() => {setEditData(""); setisEditedRowOpen(-1)}}>Cancel</button>
                                    ) : (
                                        <button onClick={()=>deleteData(e._id)} disabled={!isAddConfirmDataOpen} className='btn btn-danger'>Delete</button>
                                    )}
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            {!isAddConfirmDataOpen &&
                <input onChange={handleSetAddData} name="adddata" style={{ width: "60vw", borderRadius: "20px", paddingLeft: "15px", paddingRight: "15px",marginLeft: "18.5vw" }} type='text' />

            }
            {isAddConfirmDataOpen ? (
                <button disabled={isEditedRowOpen>=0 } onClick={() => setAddConfirmDataOpen(!isAddConfirmDataOpen)} style={{ width: "90vw", marginLeft: "3.2vw"}} className='btn btn-primary mt-5'>Add Data</button>
            ) : (
                <button onClick={() => {handleAddData(); setAddData(""); setAddConfirmDataOpen(!isAddConfirmDataOpen)}} style={{ width: "90vw", marginLeft: "3.2vw"}} className='btn btn-success mt-5'>Confirm Add Data</button>
                
               
            )}
            {!isAddConfirmDataOpen &&
                <button onClick={() => { setAddData(""); setAddConfirmDataOpen(!isAddConfirmDataOpen)}} style={{ width: "90vw", marginLeft: "3.2vw" }} className='btn btn-primary mt-4'>Cancel</button>
            }
       
        </div>

    );
};

export default UserPage;

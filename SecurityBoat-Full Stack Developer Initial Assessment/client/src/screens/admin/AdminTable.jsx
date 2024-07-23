import React, {  useState } from 'react';



const AdminTable = ({ email, crud_data, handleAddData, handleEditData, deleteData, setAddData, setEditData }) => {
    const [isAddConfirmDataOpen, setAddConfirmDataOpen] = useState(true);
    const [isEditedRowOpen, setisEditedRowOpen] = useState(-1);
    

  
  
  
  
  
  
    return (
    <>
    <h1 style={{ textAlign: "center", marginTop: "10px" }}> {email} </h1>
    <table style={{ width: "90vw", marginLeft: "5vw", marginTop: "" }} className="table m-5">
        <thead className="thead-dark">
            <tr>
                <th style={{ width: "20%", textAlign: 'center' }} scope="col">#</th>
                <th style={{ width: "20%", textAlign: 'center' }} scope="col">Notes</th>
                <th style={{ width: "20%", textAlign: 'center' }} scope="col">Button</th>
            </tr>
        </thead>
        <tbody>
            {
                crud_data.map((e, i) => (
                    <tr key={e._id}>
                        <th style={{ width: "20%", textAlign:'center' }} scope="row">{i + 1}</th>
                        <td style={{ width: "60%" }}>
                            {isEditedRowOpen === i ? (
                                <input onChange={(e)=>setEditData(e.target.value)}  style={{ width: "100%", borderRadius: "20px", paddingLeft: "15px", paddingRight: "15px" }} type='text' />
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
        <input onChange={(e)=>setAddData(e.target.value)} name="adddata" style={{ width: "60vw", borderRadius: "20px", paddingLeft: "15px", paddingRight: "15px",marginLeft: "18.5vw" }} type='text' />

    }
    {isAddConfirmDataOpen ? (<>
        <button disabled={isEditedRowOpen>=0 } onClick={() => setAddConfirmDataOpen(!isAddConfirmDataOpen)} style={{ width: "90vw", marginLeft: "3.2vw", marginBottom:"10px"}} className='btn btn-primary mt-5'>Add Data</button>
        <hr style={{background: 'lime',color: 'lime',borderColor: 'lime',height: '3px',marginBottom:"50px"}}/>
    </>) : (
        <button onClick={() => {handleAddData(email); setAddData(""); setAddConfirmDataOpen(!isAddConfirmDataOpen)}} style={{ width: "90vw", marginLeft: "3.2vw"}} className='btn btn-success mt-5'>Confirm Add Data</button>
        
       
    )}
    {!isAddConfirmDataOpen && <>
        <button onClick={() => { setAddData(""); setAddConfirmDataOpen(!isAddConfirmDataOpen)}} style={{ width: "90vw", marginLeft: "3.2vw", marginBottom:"10px" }} className='btn btn-primary mt-4'>Cancel</button>
        <hr style={{background: 'lime',color: 'lime',borderColor: 'lime',height: '3px',marginBottom:"50px"}}/>
    </>}
    </>
  )
}

export default AdminTable
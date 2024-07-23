import React from 'react'

const SideBar = ({Page, setPage}) => {
  return (
    <>
       <img style={{marginLeft:"18px", marginTop:"13px"}} src="https://venq.onrender.com/images/VENQ_BOLD_small.png" alt="VENQ"/>
       <hr/>
       <div style={{paddingLeft:"25px", marginTop:"20px", fontSize:"20px", display:"flex", flexDirection:"column"}}>
          <div onClick={()=>setPage("form")} style={{opacity:"0.6", cursor:"pointer" }}>Add Property</div>
          <div onClick={()=>setPage("properties")} style={{marginTop:"20px", opacity:"0.6", cursor:"pointer"}}>Properties</div>
       </div>
    </>
  )
}

export default SideBar
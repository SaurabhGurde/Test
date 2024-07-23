import React from 'react'

const UserData = () => {
  return (
   <div style={{width:"100vw", height:"100vh", padding:"10%"}}>
 <table className="table">
  <thead>
    <tr>
      <th scope="col">UserID</th>
      <th scope="col">Name</th>
      <th scope="col">Photo</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
   </div>
  )
}

export default UserData
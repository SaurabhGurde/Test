import React from 'react';
import loading from "./loading.gif";

const Loading = () => {
  return (
    <div style={{ marginLeft:"20vw" ,marginTop:"1vh"}}>
        <img src={loading} alt='loading' />
    </div>
  )
}

export default Loading
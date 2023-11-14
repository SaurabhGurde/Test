import React, { useState } from 'react';
import SideBar from './SideBar';
import Form from './Form';
import Properties from './Properties';

const MainPage = () => {
  const [Page, setPage] = useState("");

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '280px', height: '100vh', border: '1px solid black', backgroundColor: '#fff' }}>
        <SideBar Page={Page} setPage={setPage} />
      </div>

      {Page === "form" && (
        <div style={{ flex: 1, backgroundColor: 'rgb(245, 245, 245)', display: "flex", justifyContent: "center" }}>
          <Form />
        </div>
      )}

      {Page === "properties" && 
        <div className='container row' style={{ flex: 1, backgroundColor: 'rgb(245, 245, 245)', }}>
          <Properties />
        </div>
      }
    </div>
  );
}

export default MainPage;

import React, { useState } from 'react'
import AdminNav from './AdminNav';
import AdminSideNav from './AdminSideNav';

const AdminHome = () => {
  const [data, setData] = useState("");
  return (
    <div className=' bg-primary bg-primary  bg-opacity-25 h-screen'>
      <AdminNav />
      <div className="container-fluid  h-screen px-md-5 px-sm-0 py-md-5 py-sm-0   ">
        <div className="">
          <div className="px-md-5 px-sm-0">
            <div className="row flex-nowrap">
              <AdminSideNav />
            </div></div>
        </div>

      </div>

    </div>
  )
}

export default AdminHome;
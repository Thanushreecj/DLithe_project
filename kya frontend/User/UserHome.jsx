import React, { useState } from 'react'
import UserNav from './UserNav';
import UserSideNav from './UserSideNav';

const UserHome = () => {
    return (
        <div className=' bg-primary bg-primary  bg-opacity-25 h-screen'>
            <UserNav />
            <div className="container-fluid  h-screen px-md-5 px-sm-0 py-md-5 py-sm-0   ">
                <div className="">
                    <div className="px-md-5 px-sm-0">
                        <div className="row flex-nowrap">
                            <UserSideNav />
                        </div></div>
                </div>

            </div>

        </div>
    )
}

export default UserHome;
import React, { useState } from "react";
import MainNav from "../Pages/MainNav";
import HomeNav from "../Pages/HomeNav";
import BankSideNav from "./BankSideNav";

const BankHome = () => {
   
  return (
    <div className=" bg-primary bg-primary  bg-opacity-25 h-screen">
      <HomeNav />
      <div className="container-fluid  h-screen px-md-5 px-sm-0 py-md-5 py-sm-0   ">
        <div className="">
          <div className="px-md-5 px-sm-0">
            <div className="row flex-nowrap">
              <BankSideNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankHome;

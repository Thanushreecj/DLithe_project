import React from "react";
import MainNav from "../Pages/MainNav";
import PartnerSideNav from "./PartnerSideNav";

const PartnerHome = () => {
  return (
    <div>
      <MainNav />
      <div className="container-fluid  h-screen px-md-5 px-sm-0 py-md-5 py-sm-0   ">
        <div className="">
          <div className="px-md-5 px-sm-0">
            <div className="row flex-nowrap">
              <PartnerSideNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerHome;

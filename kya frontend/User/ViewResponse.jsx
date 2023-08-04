import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewResponse = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const param = JSON.parse(localStorage.getItem("user"));
  console.log(param);
  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/userRequest/${param.email}`
      );
      console.log(res.data, "DATA");
      setData(res.data);
    } catch {
      alert("something went wrong");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleAccount = () => {};
  return (
    <div>
      <div className=" flex justify-start ">
        <h2>Account Request information</h2>
      </div>
      <table className="  table table-striped table-bordered container w-75 ms-0 me-5">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, Index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewResponse;

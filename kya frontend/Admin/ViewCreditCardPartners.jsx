import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddUser from "./AddUser";

const ViewCreditCardPartners = () => {
  const [data, setData] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/v1/partner`);
      console.log(res.data, "DATA");
      setUser(res.data);
    } catch {
      alert("something went wrong");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>All Partners</h2>
      <table
        class="  table table-striped table-bordered w-75"
        style={{ backgroundColor: "blue" }}
      >
        <thead class="">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">PhoneNumber</th>
            <th scope="col">Address</th>
            <th scope="col">BankEmail</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, Index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <td>{item.bankEmail}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {console.log(data, "")}
    </div>
  );
};

export default ViewCreditCardPartners;

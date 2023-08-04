import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ViewBank = () => {
  const [data, setData] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const param = JSON.parse(localStorage.getItem("user"));
  console.log(param,"user")
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/v1/bank`);
      console.log(res.data, "DATA");
      setUser(res.data);
    } catch {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAccount = async (item) => {
    const dataToSend = {
      name: param.name,
      email: param.email,
      password: param.password,
      address: param.address,
      phoneNumber: param.phoneNumber,
      bankEmail: item.email,
    };
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/userAccountRequest/${item.id}/${param.id}`,
        dataToSend
      );

      console.log(res.data, "res");

      const addAccountToUser = await axios.post(
        `http://localhost:8080/api/v1/addAccountRequest/${param.id}/${res.data.id}`,
        data
      );
      console.log(addAccountToUser.data, "addAccount");
      toast.success("Request for the account sent");
      getData();
    } catch (error) {
      toast.error(error.response.data.msg, {});
    }
  };



  return (
    <div className="col-md-9 col-xl-10  ">
      <div className=" flex justify-start ">
        <h2>All Banks</h2>
      </div>
      <table className="  table table-striped table-bordered  ">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, Index) => {
            return (
              <tr className="w-10 h-10">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <td>
                  <button
                    onClick={() => handleAccount(item)}
                    class="btn btn-info  text-light "
                  >
                    Add Account
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBank;

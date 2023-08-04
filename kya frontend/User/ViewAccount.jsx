import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ViewAccount = () => {
  const [data, setData] = useState([]);
  const param = JSON.parse(localStorage.getItem("user"));
  console.log(param, "vvvvv");
  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/myAccount/${param.email}`
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
  const handleSubmit = async (item) => {
    try {
      const dataToSend = {
        userName: param.name,
        userEmail: param.email,
        bankName: item.bankName,
        bankEmail: item.bankEmail,
      };
        console.log(item.bankEmail,"bankEmail");
      const res = await axios.post(
        `http://localhost:8080/api/v1/cardRequest/${item.bankEmail}`,
        dataToSend
      );
      console.log(res.data, "res");
      const addAccountToUser = await axios.post(
        `http://localhost:8080/api/v1/addCardRequest/${param.id}/${res.data.id}`,
        data
      );
      console.log(addAccountToUser.data, "addAccount");
      toast.success("Request fot the card sent");
      getData();
    } catch (error) {
     
      toast.error(error.response.data,{});
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className=" flex justify-start ">
            <h2>MY Banks</h2>
          </div>
          <table className="  table table-striped table-bordered  w-75 ">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">BankName</th>
                <th scope="col">Email</th>
                <th scope="col">IFSC</th>
                <th scope="col">CIF</th>
                <th scope="col">Branch</th>
                <th scope="col">Loan</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, Index) => {
                return (
                  <tr className="w-10 h-10">
                    <td>{item.id}</td>
                    <td>{item.bankName}</td>
                    <td>{item.bankEmail}</td>
                    <td>{item.ifscCode}</td>
                    <td>{item.cifCode}</td>
                    <td>{item.branch}</td>
                    <td>{item.loan}</td>
                    <td>
                      <button
                        onClick={() => handleSubmit(item)}
                        class="btn btn-info  text-light "
                      >
                        Apply Card
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewAccount;

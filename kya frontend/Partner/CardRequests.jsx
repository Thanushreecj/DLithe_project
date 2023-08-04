import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CardRequests = () => {

  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const partner = JSON.parse(localStorage.getItem("partner"));
  console.log(partner, "partner");

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/cardRequests/${partner.bankEmail}`
      );
      console.log(res.data,"REsss");
      if (res.data === null) {
        alert("No Data found");
      } else {
        setUser(res.data);
      }
    } catch {
      alert("something went wrong");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = async (item) => {
    try {
        const res = await axios.post(`http://localhost:8080/api/v1/requestToBank/${item.id}/${item.bankEmail}`,data)
        console.log(res.data,"VV");
        toast.success("Send to Bank Successfully");
        getData();
    } catch (error) {
        toast.error("Not Sent")
    }
};
const submit = async (id) => {
    try {
        const res = await axios.post(`http://localhost:8080/api/v1/acceptCardRequest/${id}`)
        toast.success("Accepted successfully");
        getData();
    } catch (error) {
        toast.error("Not Accepted")
    }
};
  return (
    <div>
      <h2>All card requests</h2>
      <table class="  table table-striped table-bordered w-auto" style={{backgroundColor:"blue"}} >
        <thead class="">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">BankName</th>
            <th scope="col">BankEmail</th>
            <th scope="col">Loan Status</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, Index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.userName}</td>
                <td>{item.userEmail}</td>
                <td>{item.bankName}</td>
                <td>{item.bankEmail}</td>
                <td>{item.loan}</td>
                <td>{item.status}</td>
                <td>
                    {item.status === "requested" ? (
                        <button
                    onClick={() => handleSubmit(item)}
                    class="btn btn-info  text-white"
                  >
                    Send To Bank
                  </button>
                    ):( <button
                        onClick={() => submit(item.id)}
                        class="btn btn-info  text-white"
                      >
                        GenerateCard
                      </button>)}
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CardRequests;

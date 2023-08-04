import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BankCardRequests = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const partner = JSON.parse(localStorage.getItem("partner"));
  console.log(partner, "partner");

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/bankCardRequests/${partner.bankEmail}`
      );
      console.log(res.data, "REsss");
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
      const res = await axios.post(
        `http://localhost:8080/api/v1/bankRequest/${item.id}`,
        data
      );
      console.log(res.data, "VV");
      toast.success("Accepted Successfully");
      getData();
    } catch (error) {
      toast.error("Not Accepted");
    }
  };
  const submit = async (id) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/rejectCard/${id}`
      );
      toast.success("Rejected successfully");
      getData();
    } catch (error) {
      toast.error("Not Rejected");
    }
  };
  return (
    <div>
      <h2>All card requests</h2>
      <table
        class="  table table-striped table-bordered w-auto"
        style={{ backgroundColor: "blue" }}
      >
        <thead class="">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">BankName</th>
            <th scope="col">BankEmail</th>
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
                <td>{item.status}</td>
                <td>
                  <button
                    onClick={() => handleSubmit(item)}
                    class="btn btn-success  text-light f"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => submit(item.id)}
                    class="btn btn-danger  text-white"
                  >
                    Reject
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

export default BankCardRequests;

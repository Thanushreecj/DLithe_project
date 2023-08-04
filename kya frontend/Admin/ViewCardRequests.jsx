import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ViewCardRequests = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/v1/cardRequest`);
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
            <th scope="col">BankName</th>
            <th scope="col">BankEmail</th>
            <th scope="col">Status</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ViewCardRequests;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CardResponse = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const param = JSON.parse(localStorage.getItem("user"));
  console.log(param);
  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/card/${param.id}`
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
  return (
    <div>
      <div className=" flex justify-start ">
        <h2>Card Details</h2>
      </div>
      <table className="table table-striped table-bordered container w-75 ms-0 me-5">
        <thead>
          <tr>
            <th>S.No</th>
            <th>UserName</th>
            <th>BankName</th>
            <th>Card Number</th>
            <th>CVV</th>
            <th>ExpiryYear</th>
            <th>PIN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.userName}</td>
            <td>{data.bankName}</td>
            <td>{data.cardNumber}</td>
            <td>{data.cvv}</td>
            <td>{data.expiryDate}</td>
            <td>{data.pin}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardResponse;

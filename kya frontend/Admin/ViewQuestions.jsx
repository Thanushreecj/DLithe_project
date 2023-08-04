import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ViewQuestions = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/v1/question`);
        console.log(res.data, "DATA");
        setUser(res.data);
      } catch {
        alert("something went wrong");
      }
    };
    useEffect(() => {
      getData();
    }, []);
    console.log(user);
   
  return (
    <div>
      <h2>All Questions</h2>
      <table
        class=" table table-striped table-bordered w-75"
        style={{ backgroundColor: "blue" }}
      >
        <thead class="">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">UserEmail</th>
            <th scope="col">Question</th>
            <th scope="col">Answer</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, Index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.userEmail}</td>
                <td>{item.question}</td>
                <td>{item.answer}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => navigate(`/submitanswer/${item.id}`)}
                    class="btn btn-info  text-light "
                  >
                    Submit Answer
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

export default ViewQuestions;

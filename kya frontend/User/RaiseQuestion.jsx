import React from 'react'
import UserNav from './UserNav';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const RaiseQuestion = () => {
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
    }, []);  return (
    <div>
           <div className="col-md-9 col-xl-10 ">
            <div className="">
                <button
                    className="btn btn-secondary text-end mb-2 " onClick={() => {
                        navigate("/addQuestion")
                    }}
                >
                    Add Question
                </button>
            </div>
            <table class=" table table-striped table-bordered ">
                <thead class="">
                    <tr>
                        <th scope="col" >
                            S.No
                        </th>
                        <th scope="col" >
                             User Email
                        </th>
                        <th scope="col" >
                        Question
                        </th>
                        <th scope="col" >
                        Answer
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, Index) => {
                        return (
                            <tr >
                                <td >
                                    {item.id}
                                </td>
                                <td >
                                    {item.userEmail}
                                </td>
                                <td >
                                    {item.question}
                                </td>
                               
                                <td >
                                    {item.answer}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default RaiseQuestion;
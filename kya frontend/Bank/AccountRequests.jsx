import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AccountRequests = () => {
    const [data, setData] = useState("");
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const bank = JSON.parse(localStorage.getItem("bank"))
    console.log(bank, "Bank")
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/userRequests/${bank.id}`);
            console.log(res.data, "DATA");
            if (res.data === null) {
                alert("No Data found")
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
            const dataToSend = {
                username: item.name,
                email: item.email,
                bankEmail: bank.email,
                bankName: bank.name,
                ifscCode: bank.ifscCode,
                cifCode: bank.cifCode,
                branch: bank.branch,
                address: bank.address
            }
            console.log(dataToSend,"dfsdfsd");
            const res = await axios.post(`http://localhost:8080/api/v1/accountRequest/${item.id}`, dataToSend)
            console.log(res.data, "VV");
            toast.success("Accepted Successfully");
            getData();
        } catch (error) {
            toast.error("Not Accepted")
        }
    };
    const submit = async (id) => {
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/rejectRequest/${id}`)
            toast.success("Rejected successfully");
            getData();
        } catch (error) {
            toast.error("Not Rejected")
        }
    };
    return (
        <div className="col-md-9 col-xl-10 ">
            <div className="">
                <h1
                    className=" text-end mb-2 "
                >
                    ACCOUNT REQUESTS
                </h1>
            </div>
            <table class="  table table-striped table-bordered w-96 ">
                <thead class="">
                    <tr>
                        <th scope="col" >
                            S.No
                        </th>
                        <th scope="col" >
                            Name
                        </th>
                        <th scope="col" >
                            Email
                        </th>
                        <th scope="col" >
                            Phone Number
                        </th>
                        <th scope="col" >
                            Address
                        </th>
                        {/* <th scope="col" >
                    Status
                </th> */}
                        <th scope="col" >
                            Actions
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
                                    {item.name}
                                </td>
                                <td >
                                    {item.email}
                                </td>
                                <td >
                                    {item.phoneNumber}
                                </td>
                                <td >
                                    {item.address}
                                </td>
                                {/* <td >   
                            {item.status}
                        </td> */}
                                <td  >
                          
                                    {item.status=== "requested" ? ( <button
                                        onClick={() => handleSubmit(item)}
                                        class="btn btn-success  text-white"
                                    >
                                        ACCEPT
                                    </button>) : ("")}
                                    {item.status=== "requested" ? ( <button
                                        onClick={() => submit(item.id)}
                                        class="btn btn-danger  text-white"
                                    >
                                        REJECT
                                    </button>) : ("")}
                                    {item.status === "accepted" ? (
                                        <button
                                            class="btn btn-success  text-light f"
                                        >ACCEPTED
                                        </button>
                                    ) : item.status === "Rejected" ? (
                                        <button
                                            class="btn btn-danger  text-light f"
                                        >REJECTED
                                        </button>) : ""}


                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {console.log(data, "")}
        </div>
    )
}

export default AccountRequests;
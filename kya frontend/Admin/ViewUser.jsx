import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddUser from "./AddUser";

const ViewUser = () => {
    const [data, setData] = useState("");
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/user`);
            console.log(res.data, "DATA");
            setUser(res.data);
        } catch {
            alert("something went wrong");
        }
    };
    useEffect(() => {
        getData();
    }, []);
    const submit = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:8080/api/v1/user/${id}`)
            toast.success("Customer deleted successfully");
            getData();
        } catch (error) {
            toast.error("Not deleted")
        }
    };

    return (
        <div className="col-md-9 col-xl-10 ">
            <div className="">
                <button
                    className="btn btn-info text-end mb-2 " onClick={() => {
                        navigate("/addUser")
                    }}
                >
                    Add User
                </button>
            </div>
            <table class="  table table-striped table-bordered ">
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
                                <td >
                                    <button
                                        onClick={() => navigate(`/updateUser/${item.id}`)}
                                        class="btn btn-success  text-light f"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => submit(item.id)}
                                        class="btn btn-danger  text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {console.log(data, "")}
        </div>
    );
};

export default ViewUser;

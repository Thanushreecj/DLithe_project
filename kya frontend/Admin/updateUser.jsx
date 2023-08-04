
import React, { useEffect, useState } from "react";
import { get, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import AdminNav from './AdminNav';

const UpdateUser = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phoneNumber: ""
    });

    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/user/${params.id}`)
            console.log(res.data, "data");
            setData(res.data)
        } catch (err) {
            console.log(err)
            toast.err(err.response.data.msg, {})

        }
    }

    useEffect(() => {
        getData();
    }, [])
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async () => {
        try {
            console.log(data,"hii")
            const res = await axios.patch(`http://localhost:8080/api/v1/user/${params.id}`, data);
            console.log(res.data)
            toast.success("user updated successfully")
            navigate("/adminHome")
        } catch (error) {
            toast.error(error.response.data.msg, {})
        }
    }
    return (
        <div className="bg py-5">
            <AdminNav />
            <div className="container ">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card mt-5" >
                            <div className="card-img">
                                <img src="https://cdn-icons-png.flaticon.com/512/2521/2521826.png">

                                </img>
                            </div>
                            <h2 className="px-5">Update User Details Here ➡</h2>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5  card mt-5 border-primary">

                        <div className="fs-2 fw-bold  ">Update User Page</div>
                      
                           


                     
                            <div class="mb-3 mt-3">
                                <label for="exampleInputName" class="form-label text-primary opacity-75">Name:</label>
                                <input type="text" name="name" value={data.name} onChange={handleChange} class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="exampleInputEmail1" class="form-label text-primary opacity-75">Email address</label>
                                <input type="email" name="email" value={data.email} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 ">
                                <label for="exampleInputEmail1" class="form-label text-primary opacity-75">Password</label>
                                <input type="password" name="password" value={data.password} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div class="mb-3 mt-3">
                                <label for="exampleInputName" class="form-label text-primary opacity-75">address</label>
                                <input type="text" value={data.address} name="address" onChange={handleChange} class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="exampleInputName" class="form-label text-primary opacity-75">phoneNumber</label>
                                <input type="text" value={data.phoneNumber} name="phoneNumber" onChange={handleChange} class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                            </div>

                            <button
                                type="submit"
                                onClick={()=> handleSubmit()}
                                className="btn btn-primary mt-3 mb-3"                            >
                                Submit
                            </button>
                      

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;

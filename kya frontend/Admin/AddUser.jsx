
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import AdminNav from './AdminNav';

const AddUser = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
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
                            <h2 className="px-5">Add User Details Here ➡</h2>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5  card mt-5 border-primary">

                        <div className="fs-2 fw-bold  ">Add User Page</div>
                        <form
                            onSubmit={handleSubmit(async (data) => {
                                console.log(data, "data");
                                try {
                                    const res = await axios.post(`http://localhost:8080/api/v1/userRegister`, data);
                                    console.log(res.data, "user")
                                    toast.success(res.data.msg, {})
                                    navigate("/adminHome")
                                } catch (error) {
                                    toast.error(error.response.data.msg, {})
                                }
                            })}

                        >
                            <div class="mb-3 mt-3">
                                <label for="exampleInputName" class="form-label text-primary opacity-75">Name:</label>
                                <input type="text"   {...register("name")} class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="exampleInputEmail1" class="form-label text-primary opacity-75">Email address</label>
                                <input type="email"   {...register("email")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 ">
                                <label for="exampleInputEmail1" class="form-label text-primary opacity-75">Password</label>
                                <input type="password"   {...register("password")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div class="mb-3 mt-3">
                                <label for="exampleInputName" class="form-label text-primary opacity-75">address</label>
                                <input type="text"   {...register("address")} class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="exampleInputName" class="form-label text-primary opacity-75">phoneNumber</label>
                                <input type="text"   {...register("phoneNumber")} class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary mt-3 mb-3"                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;

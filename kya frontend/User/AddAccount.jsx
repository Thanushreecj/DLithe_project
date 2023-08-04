
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import AdminNav from "../Admin/AdminNav";

const AddAccount = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const user=JSON.parse(localStorage.getItem("user"));
    console.log(user,"user")
    return (
        <div className=" py-5">
            <div className="container ">
                <div className="row">
                    <div className="col-sm-2"></div>
                        
                    <div className="col-sm-5 bg  card mt-5 border-primary">

                        <div className="fs-2 fw-bold  ">Add Account Details</div>
                        <form
                            onSubmit={handleSubmit(async (data) => {
                                console.log(data, "data");
                                try {
                                    const res = await axios.post(`http://localhost:8080/api/v1/account`, data);
                                    console.log(res.data, "user")
                                    toast.success(res.data.msg, {})
                                    navigate("/adminHome")
                                } catch (error) {
                                    toast.error(error.response.data.msg, {})
                                }
                            })}

                        >
                            <div class="mb-3 mt-3">
                                <label for="exampleInputName" class="form-label text-primary opacity-75">userName:</label>
                                <input type="text"   {...register("userName")} class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
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

export default AddAccount;

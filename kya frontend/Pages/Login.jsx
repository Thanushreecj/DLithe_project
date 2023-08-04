
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import MainNav from "./MainNav";

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className="bg py-5">
            <MainNav />
            <div className="container ">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card mt-5" style={{backgroundColor:"ActiveCaption"}}>
                            <div className="card-img">
                                <img src="https://t3.ftcdn.net/jpg/01/22/71/96/360_F_122719641_V0yw2cAOrfxsON3HeWi2Sf4iVxhv27QO.jpg">

                                </img>
                            </div>
                            <h2 className="px-5">Login Here ➡</h2>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5  card mt-5 border-primary">

                        <div className="fs-2 fw-bold  ">Login Page</div>
                        <form
                            onSubmit={handleSubmit(async (data) => {
                                if (
                                    data.email === "admin@gmail.com" &&
                                    data.password === "admin"
                                ) {
                                    navigate("/adminhome");
                                    toast.success("Admin login successfully");
                                } else {
                                   
                                

                               
                                if (data.role === "User") {
                                    try {
                                        const res = await axios.post(
                                            `http://localhost:8080/api/v1/userLogin`,
                                            data
                                        );
                                        console.log(res.data,"da")

                                        localStorage.setItem("user", JSON.stringify(res.data))
                                        toast.success("User login successfully");
                                        navigate("/userHome")
                                    } catch (error) {
                                        toast.error(error.response.data.msg,{});
                                    }
                                } else if (data.role === "Admin") {
                                    
                                } else if (data.role === "Bank") {
                                    try {
                                        const res = await axios.post(
                                            `http://localhost:8080/api/v1/bankLogin`,
                                            data
                                        );
                                        console.log(res.data,"login")
                                        localStorage.setItem("bank", JSON.stringify(res.data))
                                        toast.success("Bank login successfully")
                                        navigate("/bankhome")
                                    } catch (error) {
                                        toast.error("Invald credentials");
                                    }
                                } else if (data.role === "creditCardPartner") {
                                    try {
                                        const res = await axios.post(
                                            `http://localhost:8080/api/v1/partnerLogin`,
                                            data
                                        );
                                        localStorage.setItem("partner", JSON.stringify(res.data))
                                        toast.success("CreditCardPartner login successfully")
                                        navigate("/partnerHome")
                                    } catch (error) {
                                        toast.error("Invald credentials");
                                    }
                                }
                            }
                            })}
                        >
                            <div class="mb-3 mt-3">
                                <label for="exampleInputEmail1" class="form-label text-primary opacity-75">Email address</label>
                                <input type="email"   {...register("email")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div> <div class="mb-3 ">
                                <label for="exampleInputEmail1" class="form-label text-primary opacity-75">Password</label>
                                <input type="password"   {...register("password")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <label for="exampleInputEmail1" class="form-label text-primary opacity-75"> Role</label>

                            <select class="form-select"  {...register("role")} aria-label="Default select example">
                                <option selected>Select Role</option>
                        
                                <option value="Bank">Bank</option>
                                <option value="User">User</option>
                                <option value="creditCardPartner">Credit Card Partner</option>
                            </select>
                            <button
                                type="submit"
                                className="btn btn-primary mt-4"                            >
                                Submit
                            </button>
                        </form>
                        <a
                            type="submit"
                            href="/register"
                            className="flex justify-start text-end  fw-bold text-primary"
                        >
                            Don't have an account ?
                            <p className="font-bold text-blue-500">click here to register</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

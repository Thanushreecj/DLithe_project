import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import MainNav from './MainNav';

const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
  return (
    <div>
        <MainNav/>
        <div className="container ">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card mt-5" >
                            <div className="card-img">
                                <img src="https://cutewallpaper.org/24/register-png/download-register-button-free-png-transparent-image-and-clipart.png" style={{height:550}}>

                                </img>
                            </div>
                            <h2 className="px-5">Register  Here ➡</h2>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5  card mt-5 border-primary">

                        <div className="fs-2 fw-bold  ">Register Page</div>
                        <form  onSubmit={handleSubmit(async (data) => {
                            if(data.role === "bank"){
                                console.log(data, "data");
                                try {
                                    const res = await axios.post(`http://localhost:8080/api/v1/bankRegister`, data);
                                    console.log(res.data, "user")
                                    toast.success(res.data.msg, {})
                                    window.location.assign("/register")
                                } catch (error) {
                                    toast.error(error.response.data.msg, {})
                                }
                            }
                            if(data.role === "partner"){
                                console.log(data, "data");
                                try {
                                    const res = await axios.post(`http://localhost:8080/api/v1/partnerRegister`, data);
                                    console.log(res.data, "user")
                                    toast.success(res.data.msg, {})
                                    window.location.assign("/register")
                                } catch (error) {
                                    toast.error(error.response.data.msg, {})
                                }
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
                            <select class="form-select"  {...register("role")} aria-label="Default select example">
                                <option selected>Select Role</option>
                        
                                <option value="bank">Bank</option>
                                
                                <option value="partner">Credit Card Partner</option>
                            </select>
                            <button
                                type="submit"
                                className="btn btn-primary mt-3 mb-3"                            >
                                Submit
                            </button>
                            <a
                            type="submit"
                            href="/login"
                            className="flex justify-start text-end  fw-bold text-primary"
                        >
                            Already have an account ?
                            <p className="font-bold text-blue-500">click here to Login</p>
                        </a>
                        </form>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Register
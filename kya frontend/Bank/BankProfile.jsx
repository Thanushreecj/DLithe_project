import React, { useState } from "react";
import HomeNav from "../Pages/HomeNav";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const BankProfile = () => {
  const navigate = useNavigate();
  const bank = JSON.parse(localStorage.getItem("bank"));
  //   const data={...bank}
  const [data, setData] = useState({ ...bank });
  console.log(data, "gg");
  //   console.log(bank);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (id) => {
    try {
      const res = await axios.patch(
        `http://localhost:8080/api/v1/bank/${id}`,
        data
      );
      console.log(res.data, "user");
      toast.success("Updated successfully");
      localStorage.setItem("bank", JSON.stringify(res.data));
      setData();
    } catch (error) {
      toast.error(error.response.data.msg, {});
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6  card mt-5 border-primary">
            <div className="fs-2 fw-bold  ">Profile Page</div>

            <div className="row">
              <div class="mb-3 mt-3 col-sm-6">
                <label
                  for="exampleInputName"
                  class="form-label text-primary opacity-75"
                >
                  Name:
                </label>
                <input
                  type="text"
                  value={data?.name}
                  name="name"
                  onChange={handleChange}
                  class="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 mt-3 col-sm-6">
                <label
                  for="exampleInputEmail1"
                  class="form-label text-primary opacity-75"
                >
                  Email address
                </label>
                <input
                  type="email"
                  value={data?.email}
                  name="email"
                  onChange={handleChange}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="row">
              <div class="mb-3  col-sm-6">
                <label
                  for="exampleInputName"
                  class="form-label text-primary opacity-75"
                >
                  password:
                </label>
                <input
                  type="password"
                  value={data?.password}
                  name="password"
                  onChange={handleChange}
                  class="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 col-sm-6">
                <label
                  for="exampleInputEmail1"
                  class="form-label text-primary opacity-75"
                >
                  {" "}
                  address
                </label>
                <input
                  type="text"
                  value={data?.address}
                  name="address"
                  onChange={handleChange}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="row">
              <div class="mb-2 col-sm-6">
                <label
                  for="exampleInputName"
                  class="form-label text-primary opacity-75"
                >
                  ifscCode:
                </label>
                <input
                  type="text"
                  value={data?.ifscCode}
                  name="ifscCode"
                  onChange={handleChange}
                  class="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-2 col-sm-6">
                <label
                  for="exampleInputEmail1"
                  class="form-label text-primary opacity-75"
                >
                  {" "}
                  cifCode
                </label>
                <input
                  type="text"
                  value={data?.cifCode}
                  name="cifCode"
                  onChange={handleChange}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="row">
              <div class="mb-2 col-sm-6">
                <label
                  for="exampleInputName"
                  class="form-label text-primary opacity-75"
                >
                  branch:
                </label>
                <input
                  type="text"
                  value={data?.branch}
                  name="branch"
                  onChange={handleChange}
                  class="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-2 col-sm-6">
                <label
                  for="exampleInputEmail1"
                  class="form-label text-primary opacity-75"
                >
                  {" "}
                  phoneNumber
                </label>
                <input
                  type="text"
                  value={data?.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-sm-4">
                <button
                  type="submit"
                  onClick={() => handleSubmit(data.id)}
                  className="btn btn-primary mt-3 mb-2"
                >
                  Update
                </button>
              </div>
              {/* <div className="col-sm-8">
                <Link
                  type="submit"
                  to="/accountRequests"
                  className="flex justify-start text-end mt-3  fw-bold text-primary"
                >
                  Go Back
                  <p className="font-bold ">click here to go back</p>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankProfile;

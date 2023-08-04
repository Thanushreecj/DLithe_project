import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PartnerProfile = () => {
  const navigate = useNavigate();
  const partner = JSON.parse(localStorage.getItem("partner"));
  const [data, setData] = useState({ ...partner });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (id) => {
    try {
      const res = await axios.patch(
        `http://localhost:8080/api/v1/partner/${id}`,
        data
      );
      console.log(res.data, "user");
      toast.success("Updated successfully");
      localStorage.setItem("partner", JSON.stringify(res.data));
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
                  BankEmail:
                </label>
                <input
                  type="text"
                  value={data?.bankEmail}
                  name="bankEmail"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;

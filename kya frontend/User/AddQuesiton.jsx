import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import UserNav from "./UserNav";
const user = JSON.parse(localStorage.getItem("user"));
const AddQuestion = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="bg py-5">
      <UserNav />
      <div className="container ">
        <div className="row">
          <div className="col-sm-6">
            <div className="card mt-5">
              <div className="card-img">
                <img src="https://www.espressoenglish.net/wp-content/uploads/2017/06/question-2309040_640.jpg"></img>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-5  card mt-5 border-primary">
            <div className="fs-2 fw-bold  ">Raise your question </div>
            <form
              onSubmit={handleSubmit(async (data) => {
                console.log(data, "data");
                try {
                  const dataToSend = {
                    userEmail: user.email,
                    question: data.question,
                  };
                  const res = await axios.post(
                    `http://localhost:8080/api/v1/question`,
                    dataToSend
                  );
                  console.log(res.data, "user");
                  toast.success("Question raised successfully");
                } catch (error) {
                  toast.error(error.response.data.msg, {});
                }
              })}
            >
              <div class="form-floating mt-5">
                <textarea
                  class="form-control"
                  {...register("question")}
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">queries</label>
              </div>

              <button type="submit" className="btn btn-primary mt-3 mb-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;

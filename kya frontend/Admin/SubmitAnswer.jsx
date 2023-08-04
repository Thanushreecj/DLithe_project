import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";

const SubmitAnswer = () => {
  const param = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/question/${param.id}`
      );

      setData(res.data);
    } catch (error) {
      alert("something went wrong");
    }
  };
  console.log(data.question, "question");
  useEffect(() => {
    getData();
  }, []);

  const { register, handleSubmit } = useForm({defaultValues:{question:data.question}});
  return (
    <div>
      <AdminNav />
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
                  const res = await axios.patch(
                    `http://localhost:8080/api/v1/question/${param.id}`,
                    data
                  );
                  console.log(res.data, "user");
                  toast.success("Answer submitted successfully");
                  navigate("/adminhome");
                } catch (error) {
                  toast.error(error.response.data.msg, {});
                }
              })}
            >
              <div class="form-floating mt-5">
                <input
                  class="form-control"
                //   {...register("question")}
                value={data?.question}
                  placeholder="Leave a comment here"
                />
                <label>Question</label>
              </div>
              <div class="form-floating mt-5">
                <textarea
                  class="form-control"
                  {...register("answer")}
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Give answer</label>
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

export default SubmitAnswer;

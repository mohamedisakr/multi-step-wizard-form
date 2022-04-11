import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseEmail } from "../rootSlice";

export const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: { email } });

  const onSubmit = (data) => {
    dispatch(chooseEmail(data.email));
    navigate("/step3");
  };

  // <div className="card">
  //   <h5 className="card-title">Email</h5>
  //   <div className="card-body">
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", { required: "Email is required" })}
          className="form-control form-control-lg"
          placeholder="Email address *"
        />
      </div>
      <span className="text-sm text-left text-red-700">
        {errors.email?.message}
      </span>
      <button className="btn btn-primary btn-block mb-4">Next</button>
    </form>
  );
};

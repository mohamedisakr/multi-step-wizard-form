import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { choosePassword } from "../rootSlice";

export const Step3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = useSelector((state) => state.password);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: { password } });

  const onSubmit = (data) => {
    dispatch(choosePassword(data.password));
    navigate("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          data-testid="password"
          {...register("password", { required: "Password is required" })}
          className="form-control"
          placeholder="Password *"
        />
      </div>
      <span className="small text-left text-red-700">
        {errors.password?.message}
      </span>

      <button className="btn btn-primary btn-block mb-4">Next</button>
    </form>
  );
};

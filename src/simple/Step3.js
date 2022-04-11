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
      <input
        type="password"
        id="password"
        name="password"
        data-testid="password"
        {...register("password", { required: "Password is required" })}
        className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="Password *"
      />
      <span className="text-sm text-left text-red-700">
        {errors.password?.message}
      </span>

      <button>Next</button>
    </form>
  );
};

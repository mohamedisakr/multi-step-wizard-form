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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        id="email"
        name="email"
        {...register("email", { required: "Email is required" })}
        className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="Email address *"
      />
      <span className="text-sm text-left text-red-700">
        {errors.email?.message}
      </span>
      <button>Next</button>
    </form>
  );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseBase } from "../rootSlice";

export const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const base = useSelector((state) => state.base);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: {} });

  const onSubmit = (data) => {
    dispatch(chooseBase(data.base));
    navigate("./step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4">
      <input
        type="text"
        id="firstName"
        name="firstName"
        {...register("firstName")}
        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="First Name *"
      />
      <span className="text-sm text-left text-red-700">
        {errors.name?.message}
      </span>

      <input
        type="text"
        id="lastName"
        name="lastName"
        {...register("lastName")}
        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="Last Name *"
      />
      <span className="text-sm text-left text-red-700">
        {errors.name?.message}
      </span>

      <button>Next</button>
    </form>
  );
};

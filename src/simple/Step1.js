import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseFirstName, chooseLastName } from "../rootSlice";

export const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: { firstName, lastName } }); //

  const onSubmit = (data) => {
    console.log(data);

    dispatch(chooseFirstName(data.firstName));
    dispatch(chooseLastName(data.lastName));
    navigate("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4">
      <input
        type="text"
        id="firstName"
        name="firstName"
        {...register("firstName", { required: "First name is required" })}
        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="First Name *"
      />
      <span className="text-sm text-left text-red-700">
        {errors.firstName?.message}
      </span>

      <input
        type="text"
        id="lastName"
        name="lastName"
        {...register("lastName", { required: "Last name is required" })}
        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="Last Name *"
      />
      <span className="text-sm text-left text-red-700">
        {errors.lastName?.message}
      </span>

      <button>Next</button>
    </form>
  );
};

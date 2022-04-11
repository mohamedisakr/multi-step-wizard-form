import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseCheese } from "../rootSlice";

export const Step3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cheese = useSelector((state) => state.cheese);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: { cheese } });

  const onSubmit = (data) => {
    dispatch(chooseCheese(data.cheese));
    navigate("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="password"
        id="password"
        name="password"
        data-testid="password"
        {...register("password")}
        className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="Password *"
      />
      <span className="text-sm text-left text-red-700">
        {errors.password?.message}
      </span>

      <input
        type="password"
        id="passwordConfirmation"
        name="passwordConfirmation"
        data-testid="repeat"
        {...register("passwordConfirmation")}
        className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="Re-enter password *"
      />
      <span className="text-sm text-left text-red-700">
        {errors.passwordConfirmation?.message}
      </span>
      <button>Next</button>
    </form>
  );
};

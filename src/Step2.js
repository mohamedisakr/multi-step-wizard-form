import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseCrust } from "./rootSlice";

export const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const crust = useSelector((state) => state.crust);
  const { register, handleSubmit } = useForm({ defaultValues: { crust } });

  const onSubmit = (data) => {
    dispatch(chooseCrust(data.crust));
    navigate("/step3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="crust">Pick crust:</label>
        <select
          id="crust"
          name="crust"
          {...register("crust", { required: true })}
        >
          <option value="classic_thin">Classic Thin</option>
          <option value="deep_pan">Deep Pan</option>
          <option value="filled_crust">Filled Crust</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};

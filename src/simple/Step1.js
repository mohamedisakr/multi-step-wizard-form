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
    dispatch(chooseFirstName(data.firstName));
    dispatch(chooseLastName(data.lastName));
    navigate("/step2");
  };

  return (
    <div className="card">
      <h5 className="card-title">First and Last Name</h5>
      <div className="card-body">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column mt-4"
        >
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              {...register("firstName", {
                required: "First name is required",
              })}
              className="form-control"
              placeholder="First Name *"
            />
          </div>
          <span className="text-sm text-left text-red-700">
            {errors.firstName?.message}
          </span>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              {...register("lastName", { required: "Last name is required" })}
              className="form-control"
              placeholder="Last Name *"
            />
          </div>
          <span className="text-sm text-left text-red-700">
            {errors.lastName?.message}
          </span>

          <button className="btn btn-primary btn-block mb-4">Next</button>
        </form>
      </div>
    </div>
  );
};

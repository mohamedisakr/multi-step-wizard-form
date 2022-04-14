import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { choosePropertyName, choosePropertyType } from "../propertyTypeSlice";

const FlatStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const roomConfig = useSelector((state) => state.roomConfig);
  const floorNumber = useSelector((state) => state.floorNumber);
  const facingType = useSelector((state) => state.facingType);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: { roomConfig, floorNumber, facingType },
  });

  // Flat, Plot, Estab
  const onSubmit = (data) => {
    console.log(data.roomConfig);
    console.log(data.floorNumber);
    console.log(data.facingType);
    // console.log(data.propName);
    // dispatch(choosePropertyName(data.propName));
    // if (data.propType === "Flat") {
    //   dispatch(choosePropertyType(data.propType));
    //   navigate("/flatstep");
    // } else if (data.propType === "Plot") {
    //   dispatch(choosePropertyType(data.propType));
    //   navigate("/plotstep");
    // } else if (data.propType === "Estab") {
    //   dispatch(choosePropertyType(data.propType));
    //   navigate("/estabstep");
    // }
  };

  return (
    <div>
      <h2>Flat Settings</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">
              Select Room Config
            </legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="roomConfig"
                  id="1BHK"
                  value="1BHK"
                  {...register("roomConfig", {
                    required: "Room Config is required",
                  })}
                ></input>
                <label className="form-check-label" for="1BHK">
                  1BHK
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="roomConfig"
                  id="2BHK"
                  value="2BHK"
                  {...register("roomConfig", {
                    required: "Room Config is required",
                  })}
                ></input>
                <label className="form-check-label" for="2BHK">
                  2BHK
                </label>
              </div>
              <div className="form-check disabled">
                <input
                  className="form-check-input"
                  type="radio"
                  name="roomConfig"
                  id="3BHK"
                  value="3BHK"
                  {...register("roomConfig", {
                    required: "Room Config is required",
                  })}
                ></input>
                <label className="form-check-label" for="3BHK">
                  3BHK &amp; +
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="text-sm text-left text-red-700">
          {errors.roomConfig?.message}
        </div>
        <div className="form-group row">
          <label for="floorNumber" className="col-sm-2 col-form-label">
            Enter Floor Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="floorNumber"
              placeholder="Floor Number"
              {...register("floorNumber", {
                required: "Floor Number is required",
              })}
            ></input>
          </div>
        </div>
        <span className="text-sm text-left text-red-700">
          {errors.floorNumber?.message}
        </span>
        <div className="form-group row">
          {/* Select Facing Type */}
          <select
            id="facingType"
            name="facingType"
            {...register("facingType", {
              required: "Facing Type is required",
            })}
          >
            <option value="North">North</option>
            <option value="North-East">North East</option>
            <option value="East">East</option>
            <option value="South-East">South East</option>
            <option value="South">South</option>
            <option value="South-West">South West</option>
            <option value="West">West</option>
            <option value="North-West">North West</option>
          </select>
        </div>
        <span className="text-sm text-left text-red-700">
          {errors.facingType?.message}
        </span>
        <div className="form-group row">
          <div className="col-sm-10">
            <button className="btn btn-primary">Next</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FlatStep;
/*
 <div className="form-group row">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">Checkbox</div>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              ></input>{" "}
              <label className="form-check-label" for="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div> */

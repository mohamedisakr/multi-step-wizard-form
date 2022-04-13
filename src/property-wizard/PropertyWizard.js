import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { choosePropertyType } from "../propertyTypeSlice";

const PropertyWizard = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const propType = useSelector((state) => state.propType);

  const { handleSubmit } = useForm({
    mode: "onBlur",
    defaultValues: {},
  });

  // Flat, Plot, Estab
  const onSubmit = (data) => {
    console.log(selectedOption);
    // console.log(data.propType);
    // dispatch(choosePropertyType(data.propType));
    if (selectedOption === "Flat") {
      dispatch(choosePropertyType(selectedOption));
      navigate("/flatstep");
    } else if (selectedOption === "Plot") {
      dispatch(choosePropertyType(selectedOption));
      navigate("/plotstep");
    } else if (selectedOption === "Estab") {
      dispatch(choosePropertyType(selectedOption));
      navigate("/estabstep");
    }
  };

  const onValueChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOption);
  };

  return (
    // <form onSubmit={formSubmit}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Flat"
            checked={selectedOption === "Flat"}
            onChange={onValueChange}
          />
          Flat
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Plot"
            checked={selectedOption === "Plot"}
            onChange={onValueChange}
          />
          Plot
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Estab"
            checked={selectedOption === "Estab"}
            onChange={onValueChange}
          />
          Estab
        </label>
      </div>
      <div>Selected option is : {selectedOption}</div>
      <button className="btn btn-default">Next</button>
    </form>
  );
};

export default PropertyWizard;

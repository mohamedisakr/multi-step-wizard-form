import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const PropertyWizard = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onValueChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOption);
  };

  return (
    <form onSubmit={formSubmit}>
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
      <button className="btn btn-default" type="submit">
        Next
      </button>
    </form>
  );
};

export default PropertyWizard;

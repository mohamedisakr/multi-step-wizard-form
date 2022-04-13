import React, { useState } from "react";

const PropertyWizard = () => {
  const [selectedOption, setSelectedOption] = useState("");

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
        Submit
      </button>
    </form>
  );
};

export default PropertyWizard;

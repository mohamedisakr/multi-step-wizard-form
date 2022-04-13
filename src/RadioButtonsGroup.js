import React, { useState } from "react";

const RadioButtonsGroup = () => {
  const [selectedOption, setSelectedOption] = useState();

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
            value="Male"
            checked={selectedOption === "Male"}
            onChange={onValueChange}
          />
          Male
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Female"
            checked={selectedOption === "Female"}
            onChange={onValueChange}
          />
          Female
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Other"
            checked={selectedOption === "Other"}
            onChange={onValueChange}
          />
          Other
        </label>
      </div>
      <div>Selected option is : {selectedOption}</div>
      <button className="btn btn-default" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RadioButtonsGroup;

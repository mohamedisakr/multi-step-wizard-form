import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { choosePropertyType } from "../propertyTypeSlice";

const PropertyWizardEnhanced = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const propType = useSelector((state) => state.propType);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: { propType },
  });

  // Flat, Plot, Estab
  const onSubmit = (data) => {
    console.log(data.propType);
    if (data.propType === "Flat") {
      dispatch(choosePropertyType(data.propType));
      navigate("/flatstep");
    } else if (data.propType === "Plot") {
      dispatch(choosePropertyType(data.propType));
      navigate("/plotstep");
    } else if (data.propType === "Estab") {
      dispatch(choosePropertyType(data.propType));
      navigate("/estabstep");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Flat"
            name="propType"
            {...register("propType", {
              required: "Property Type is required",
            })}
          />
          Flat
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Plot"
            name="propType"
            {...register("propType", {
              required: "Property Type is required",
            })}
          />
          Plot
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Estab"
            name="propType"
            {...register("propType", {
              required: "Property Type is required",
            })}
          />
          Estab
        </label>
      </div>

      <div className="text-sm text-left text-red-700">
        {errors.propType?.message}
      </div>
      <button className="btn btn-default">Next</button>
    </form>
  );
};

export default PropertyWizardEnhanced;

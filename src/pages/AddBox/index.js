import { COUNTRY_MULTIPLIERS } from "../../constants";
import { hexToRgb } from "../../utils/colorFormatter";
import { useAddBoxData } from "./addBoxData";
import "./index.css";

const AddBox = () => {
  const { handleSubmit, successMessage, formData, handleChange, errors } =
    useAddBoxData();

  return (
    <div className="add-box-container">
      <div className="form-card">
        <h2>Add New Shipping Box</h2>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="box-form">
          <div className="form-group">
            <label htmlFor="receiverName">Receiver Name *</label>
            <input
              type="text"
              id="receiverName"
              name="receiverName"
              value={formData.receiverName}
              onChange={handleChange}
              className={errors.receiverName ? "error" : ""}
              placeholder="Enter receiver name"
            />
            {errors.receiverName && (
              <span className="error-message">{errors.receiverName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="weight">Weight (kg) *</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className={errors.weight ? "error" : ""}
              placeholder="Enter weight in kilograms"
              step="0.1"
              min="0"
            />
            {errors.weight && (
              <span className="error-message">{errors.weight}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="boxColor">Box Color</label>
            <div className="color-picker-container">
              <input
                type="color"
                id="boxColor"
                name="boxColor"
                value={formData.boxColor}
                onChange={handleChange}
                className="color-picker"
              />
              <span className="color-value">
                RGB: {hexToRgb(formData.boxColor)}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="country">Destination Country *</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={errors.country ? "error" : ""}
            >
              <option value="">Select a country</option>
              {Object.keys(COUNTRY_MULTIPLIERS).map((country) => (
                <option key={country} value={country}>
                  {country} ({COUNTRY_MULTIPLIERS[country]} INR per kg)
                </option>
              ))}
            </select>
            {errors.country && (
              <span className="error-message">{errors.country}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Save Box
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBox;

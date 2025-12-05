import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../../utils/validator";
import { hexToRgb } from "../../utils/colorFormatter";
import { COUNTRY_MULTIPLIERS } from "../../constants";

export const useAddBoxData = () => {
  const navigate = useNavigate();

  const [boxItems, setBoxItems] = useState(
    JSON.parse(localStorage.getItem("box-items")) || []
  );
  const [formData, setFormData] = useState({
    receiverName: "",
    weight: "",
    boxColor: "#ffffff",
    country: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("box-items", JSON.stringify(boxItems));
  }, [boxItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const formError = validateForm(formData);
    setErrors(formError);

    if (Object.keys(formError).length === 0) {
      const boxData = {
        receiverName: formData.receiverName,
        weight: parseFloat(formData.weight),
        boxColor: hexToRgb(formData.boxColor),
        country: formData.country,
        shippingCost: COUNTRY_MULTIPLIERS[formData.country] * formData.weight,
      };

      setBoxItems((prevItems) => [...prevItems, boxData]);

      setSuccessMessage("Box saved successfully!");
      setFormData({
        receiverName: "",
        weight: "",
        boxColor: "#ffffff",
        country: "",
      });
      setErrors({});

      //   Navigate to list after 1.5 seconds
      setTimeout(() => {
        navigate("/list");
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle negative weight values
    if (name === "weight") {
      const numValue = parseFloat(value);
      if (numValue < 0) {
        setErrors((prev) => ({
          ...prev,
          weight:
            "Negative values are not permitted. Weight has been set to zero.",
        }));
        setFormData((prev) => ({ ...prev, [name]: "0" }));
        return;
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.weight;
          return newErrors;
        });
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    handleSubmit,
    successMessage,
    formData,
    handleChange,
    errors,
  };
};

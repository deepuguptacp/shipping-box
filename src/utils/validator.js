export const validateForm = (formData) => {
  const newErrors = {};

  if (!formData.receiverName.trim()) {
    newErrors.receiverName = "Receiver name is required";
  }

  if (!formData.weight || formData.weight === "") {
    newErrors.weight = "Weight is required";
  } else if (parseFloat(formData.weight) <= 0) {
    newErrors.weight = "Weight must be greater than zero";
  }

  if (!formData.country) {
    newErrors.country = "Destination country is required";
  }

  return newErrors;
};

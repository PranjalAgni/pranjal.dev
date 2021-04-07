import { ChangeEvent, useState } from "react";

const useForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: null,
    name: null,
    message: null,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    console.log({ value, name });
  };

  const isFormValid = () => {
    return true;
  };

  return { formData, errors, handleInput, isFormValid };
};

export default useForm;

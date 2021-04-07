import { ChangeEvent, useState } from "react";

const useForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    _replyto: "",
    name: "",
    message: "",
  });

  const handleInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
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

import { ChangeEvent, useState } from "react";

const useForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  type ErrorsType = {
    email?: string;
    name?: string;
    message?: string;
  };

  const [errors, setErrors] = useState<ErrorsType>({});

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const nameRegex = /^[a-zA-Z\s]*[^\s]$/gim;
  const messageRegex = /^[\w\d][^<>/\\&]*$/gim;

  function isValid(value: string, name: string, regex: RegExp, text: string) {
    if (!value) {
      setErrors({ ...errors, [name]: `Your ${text} is required` });
      return false;
    } else if (!regex.test(value)) {
      setErrors({ ...errors, [name]: `Your ${text} is not valid` });
      return false;
    } else {
      setErrors({ ...errors, [name]: "" });
      return true;
    }
  }

  function validateInput(name: string, value: string) {
    switch (name) {
      case "email":
        return isValid(value, name, emailRegex, "Email");
      case "name":
        return isValid(value, name, nameRegex, "Name");
      case "message":
        return isValid(value, name, messageRegex, "Message");
      default:
        break;
    }
  }

  const resetForm = () => {
    setErrors({});
    return setFormData({ email: "", name: "", message: "" });
  };

  const handleInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { value, name } = e.target;
    validateInput(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    const errorsArray = Object.values(errors);
    return errorsArray.length === 3 && errorsArray.filter(Boolean).length === 0;
  };

  return {
    formData,
    errors,
    handleInput,
    isFormValid: isFormValid(),
    resetForm,
  };
};

export default useForm;

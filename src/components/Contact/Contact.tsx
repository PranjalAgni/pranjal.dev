import Button from "@common/Button";
import PageHeader from "@common/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useForm from "@src/hooks/useForm";
import { doAPICall } from "@src/services/api";
import React, { SyntheticEvent } from "react";
import {
  ContactBox,
  ContactForm,
  ContactWrapper,
  LeftContent,
} from "./Contact.style";

function Contact() {
  const { formData, errors, handleInput, isFormValid, resetForm } = useForm();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    await doAPICall({
      url: `${process.env.GATSBY_API_URL}/contact/submit`,
      init: {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      },
    });

    resetForm();
  };

  return (
    <ContactWrapper id="contact">
      <PageHeader>Get In Touch</PageHeader>
      <ContactBox>
        <LeftContent>
          <FontAwesomeIcon size={"5x"} icon="handshake" />
          <h3>Thank You</h3>
          <p>Do You Have Any Queries?</p>
        </LeftContent>
        <ContactForm noValidate>
          <label className="label__email">
            <span>Email</span>
            <input
              className={errors.email && "invalid"}
              onChange={handleInput}
              value={formData.email}
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@gmail.com"
            />
          </label>
          <label className="label__name">
            <span>Name</span>
            <input
              className={errors.name && "invalid"}
              onChange={handleInput}
              value={formData.name}
              name="name"
              type="text"
              required
              placeholder="John Doe"
            />
          </label>
          <label className="label__message">
            <span>Message</span>
            <textarea
              className={errors.message && "invalid"}
              onChange={handleInput}
              value={formData.message}
              name="message"
              required
              placeholder="Hey there!"
            />
          </label>

          <Button
            disabled={!isFormValid}
            className="submit__btn"
            onClick={handleSubmit}
            as="button"
            type="submit"
            value="send"
          >
            <FontAwesomeIcon icon="paper-plane" /> Submit
          </Button>
        </ContactForm>
      </ContactBox>
    </ContactWrapper>
  );
}
export default Contact;

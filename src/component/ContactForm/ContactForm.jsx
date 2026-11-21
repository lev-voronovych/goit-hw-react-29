import { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./ContactForm.css";

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name: fieldName, value } = event.target;
    if (fieldName === "name") {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddContact({ id: nanoid(), name, number });
    setName("");
    setNumber("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form__field" htmlFor="name">
        <span>Name</span>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label className="contact-form__field" htmlFor="number">
        <span>Number</span>
        <input
          id="number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button className="contact-form__submit" type="submit">
        Add contact
      </button>
    </form>
  );
};

// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };

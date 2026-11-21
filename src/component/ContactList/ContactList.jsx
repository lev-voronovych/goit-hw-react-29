import PropTypes from "prop-types";
import "./ContactList.css";

export const ContactList = ({ contactInfo, onDeleteContact }) => (
  <ul className="contact-list">
    {contactInfo.map(({ name, number, id }) => (
      <li className="contact-list__item" key={id}>
        <div>
          <h3 className="contact-list__name">{name}</h3>
          <p className="contact-list__number">{number}</p>
        </div>
        <button
          className="contact-list__delete"
          type="button"
          onClick={() => onDeleteContact(id)}
          aria-label={`Delete ${name}`}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

// ContactList.propTypes = {
//   contactInfo: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
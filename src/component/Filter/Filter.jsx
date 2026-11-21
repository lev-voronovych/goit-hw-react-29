 
import PropTypes from "prop-types";
import "./Filter.css";

export const Filter = ({ value, onChange }) => (
  <label className="contact-filter">
    <span>Find contacts by name</span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="name"
    />
  </label>
);

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };